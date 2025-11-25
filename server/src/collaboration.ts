import { Server as SocketServer } from 'socket.io';
import { nanoid } from 'nanoid';
import type { Server as HTTPServer } from 'http';

// Types
interface Participant {
    socketId: string;
    name: string;
    joinedAt: Date;
}

interface Session {
    sessionId: string;
    language: string;
    code: string;
    stdin: string;
    participants: Map<string, Participant>;
    createdAt: Date;
    lastActivity: Date;
}

// In-memory session storage
const sessions = new Map<string, Session>();

// Random name generation
const adjectives = ['Red', 'Blue', 'Green', 'Purple', 'Orange', 'Pink', 'Yellow', 'Cyan', 'Magenta', 'Lime'];
const animals = ['Panda', 'Fox', 'Wolf', 'Bear', 'Eagle', 'Lion', 'Tiger', 'Dolphin', 'Owl', 'Hawk'];

function generateRandomName(): string {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return `${adj} ${animal}`;
}

// Session cleanup - remove inactive sessions every 5 minutes
setInterval(() => {
    const now = Date.now();
    const ONE_HOUR = 60 * 60 * 1000;

    for (const [sessionId, session] of sessions.entries()) {
        if (now - session.lastActivity.getTime() > ONE_HOUR) {
            console.log(`Cleaning up inactive session: ${sessionId}`);
            sessions.delete(sessionId);
        }
    }
}, 5 * 60 * 1000);

export function initializeCollaboration(httpServer: HTTPServer) {
    const io = new SocketServer(httpServer, {
        cors: {
            origin: process.env.NODE_ENV === 'production'
                ? ['https://suryadaiv.github.io']
                : ['http://localhost:5173', 'http://localhost:5174', 'https://suryadaiv.github.io'],
            methods: ['GET', 'POST'],
            credentials: true
        },
        pingTimeout: 60000,
        pingInterval: 25000
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        let currentSessionId: string | null = null;
        let participantName: string = '';

        // Create a new session
        socket.on('create-session', (data: { language: string; code: string; stdin?: string }, callback) => {
            try {
                const sessionId = nanoid(10);
                const name = generateRandomName();

                const session: Session = {
                    sessionId,
                    language: data.language,
                    code: data.code,
                    stdin: data.stdin || '',
                    participants: new Map(),
                    createdAt: new Date(),
                    lastActivity: new Date()
                };

                session.participants.set(socket.id, {
                    socketId: socket.id,
                    name,
                    joinedAt: new Date()
                });

                sessions.set(sessionId, session);
                currentSessionId = sessionId;
                participantName = name;

                socket.join(sessionId);

                console.log(`Session created: ${sessionId} by ${name}`);

                callback({
                    success: true,
                    sessionId,
                    name,
                    participants: Array.from(session.participants.values())
                });
            } catch (error) {
                console.error('Error creating session:', error);
                callback({ success: false, error: 'Failed to create session' });
            }
        });

        // Join an existing session
        socket.on('join-session', (data: { sessionId: string }, callback) => {
            try {
                const session = sessions.get(data.sessionId);

                if (!session) {
                    return callback({ success: false, error: 'Session not found or expired' });
                }

                if (session.participants.size >= 10) {
                    return callback({ success: false, error: 'Session is full (max 10 participants)' });
                }

                const name = generateRandomName();

                session.participants.set(socket.id, {
                    socketId: socket.id,
                    name,
                    joinedAt: new Date()
                });

                session.lastActivity = new Date();
                currentSessionId = data.sessionId;
                participantName = name;

                socket.join(data.sessionId);

                console.log(`${name} joined session: ${data.sessionId}`);

                // Notify other participants
                socket.to(data.sessionId).emit('participant-joined', {
                    socketId: socket.id,
                    name,
                    joinedAt: new Date()
                });

                callback({
                    success: true,
                    sessionId: data.sessionId,
                    name,


                    language: session.language,
                    code: session.code,
                    stdin: session.stdin,
                    participants: Array.from(session.participants.values())
                });
            } catch (error) {
                console.error('Error joining session:', error);
                callback({ success: false, error: 'Failed to join session' });
            }
        });

        // Update code
        socket.on('code-update', (data: { code: string }) => {
            if (!currentSessionId) return;

            const session = sessions.get(currentSessionId);
            if (!session) return;

            session.code = data.code;
            session.lastActivity = new Date();

            // Broadcast to all other participants in the session
            socket.to(currentSessionId).emit('code-update', {
                code: data.code,
                updatedBy: participantName
            });
        });

        // Update language
        socket.on('language-update', (data: { language: string }) => {
            if (!currentSessionId) return;

            const session = sessions.get(currentSessionId);
            if (!session) return;

            session.language = data.language;
            session.lastActivity = new Date();

            socket.to(currentSessionId).emit('language-update', {
                language: data.language,
                updatedBy: participantName
            });
        });

        // Update stdin
        socket.on('stdin-update', (data: { stdin: string }) => {
            if (!currentSessionId) return;

            const session = sessions.get(currentSessionId);
            if (!session) return;

            session.stdin = data.stdin;
            session.lastActivity = new Date();

            socket.to(currentSessionId).emit('stdin-update', {
                stdin: data.stdin,
                updatedBy: participantName
            });
        });

        // Handle disconnect
        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);

            if (currentSessionId) {
                const session = sessions.get(currentSessionId);
                if (session) {
                    session.participants.delete(socket.id);

                    // Notify others
                    socket.to(currentSessionId).emit('participant-left', {
                        socketId: socket.id,
                        name: participantName
                    });

                    // Delete session if no participants left
                    if (session.participants.size === 0) {
                        console.log(`Deleting empty session: ${currentSessionId}`);
                        sessions.delete(currentSessionId);
                    }
                }
            }
        });
    });

    return io;
}
