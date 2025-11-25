import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

interface Participant {
    socketId: string;
    name: string;
    joinedAt: Date;
}

interface UseCollaborationReturn {
    isConnected: boolean;
    isSharing: boolean;
    sessionId: string | null;
    myName: string | null;
    participants: Participant[];
    createSession: (language: string, code: string, stdin?: string) => Promise<void>;
    joinSession: (sessionId: string) => Promise<void>;
    leaveSession: () => void;
    updateCode: (code: string) => void;
    updateLanguage: (language: string) => void;
    updateStdin: (stdin: string) => void;
    onCodeUpdate: (callback: (code: string, updatedBy: string) => void) => void;
    onLanguageUpdate: (callback: (language: string, updatedBy: string) => void) => void;
    onStdinUpdate: (callback: (stdin: string, updatedBy: string) => void) => void;
    error: string | null;
}

const SOCKET_URL = import.meta.env.PROD
    ? 'https://suryadaiv-github-io.onrender.com'
    : 'http://localhost:3001';

export function useCollaboration(): UseCollaborationReturn {
    const socketRef = useRef<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [myName, setMyName] = useState<string | null>(null);
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Callback refs for event handlers
    const codeUpdateCallbackRef = useRef<((code: string, updatedBy: string) => void) | null>(null);
    const languageUpdateCallbackRef = useRef<((language: string, updatedBy: string) => void) | null>(null);
    const stdinUpdateCallbackRef = useRef<((stdin: string, updatedBy: string) => void) | null>(null);

    // Initialize socket connection
    useEffect(() => {
        const socket = io(SOCKET_URL, {
            transports: ['websocket', 'polling'],
            autoConnect: false
        });

        socketRef.current = socket;

        socket.on('connect', () => {
            console.log('Connected to collaboration server');
            setIsConnected(true);
            setError(null);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from collaboration server');
            setIsConnected(false);
        });

        socket.on('participant-joined', (participant: Participant) => {
            console.log('Participant joined:', participant.name);
            setParticipants(prev => [...prev, participant]);
        });

        socket.on('participant-left', (data: { socketId: string; name: string }) => {
            console.log('Participant left:', data.name);
            setParticipants(prev => prev.filter(p => p.socketId !== data.socketId));
        });

        socket.on('code-update', (data: { code: string; updatedBy: string }) => {
            if (codeUpdateCallbackRef.current) {
                codeUpdateCallbackRef.current(data.code, data.updatedBy);
            }
        });

        socket.on('language-update', (data: { language: string; updatedBy: string }) => {
            if (languageUpdateCallbackRef.current) {
                languageUpdateCallbackRef.current(data.language, data.updatedBy);
            }
        });

        socket.on('stdin-update', (data: { stdin: string; updatedBy: string }) => {
            if (stdinUpdateCallbackRef.current) {
                stdinUpdateCallbackRef.current(data.stdin, data.updatedBy);
            }
        });

        socket.on('connect_error', (err) => {
            console.error('Connection error:', err);
            setError('Failed to connect to collaboration server');
        });

        return () => {
            socket.disconnect();
            socket.removeAllListeners();
        };
    }, []);

    const createSession = useCallback(async (language: string, code: string, stdin?: string) => {
        if (!socketRef.current) return;

        socketRef.current.connect();

        return new Promise<void>((resolve, reject) => {
            socketRef.current!.emit('create-session', { language, code, stdin }, (response: any) => {
                if (response.success) {
                    setSessionId(response.sessionId);
                    setMyName(response.name);
                    setParticipants(response.participants);
                    setIsSharing(true);
                    setError(null);

                    // Update URL without reload
                    const url = new URL(window.location.href);
                    url.searchParams.set('session', response.sessionId);
                    window.history.pushState({}, '', url.toString());

                    resolve();
                } else {
                    setError(response.error || 'Failed to create session');
                    reject(new Error(response.error));
                }
            });
        });
    }, []);

    const joinSession = useCallback(async (sessionId: string) => {
        if (!socketRef.current) return;

        socketRef.current.connect();

        return new Promise<void>((resolve, reject) => {
            socketRef.current!.emit('join-session', { sessionId }, (response: any) => {
                if (response.success) {
                    setSessionId(response.sessionId);
                    setMyName(response.name);
                    setParticipants(response.participants);
                    setIsSharing(true);
                    setError(null);
                    resolve();
                } else {
                    setError(response.error || 'Failed to join session');
                    reject(new Error(response.error));
                }
            });
        });
    }, []);

    const leaveSession = useCallback(() => {
        if (socketRef.current) {
            socketRef.current.disconnect();
        }
        setIsSharing(false);
        setSessionId(null);
        setMyName(null);
        setParticipants([]);

        // Remove session from URL
        const url = new URL(window.location.href);
        url.searchParams.delete('session');
        window.history.pushState({}, '', url.toString());
    }, []);

    const updateCode = useCallback((code: string) => {
        if (socketRef.current && isSharing) {
            socketRef.current.emit('code-update', { code });
        }
    }, [isSharing]);

    const updateLanguage = useCallback((language: string) => {
        if (socketRef.current && isSharing) {
            socketRef.current.emit('language-update', { language });
        }
    }, [isSharing]);

    const updateStdin = useCallback((stdin: string) => {
        if (socketRef.current && isSharing) {
            socketRef.current.emit('stdin-update', { stdin });
        }
    }, [isSharing]);

    const onCodeUpdate = useCallback((callback: (code: string, updatedBy: string) => void) => {
        codeUpdateCallbackRef.current = callback;
    }, []);

    const onLanguageUpdate = useCallback((callback: (language: string, updatedBy: string) => void) => {
        languageUpdateCallbackRef.current = callback;
    }, []);

    const onStdinUpdate = useCallback((callback: (stdin: string, updatedBy: string) => void) => {
        stdinUpdateCallbackRef.current = callback;
    }, []);

    return {
        isConnected,
        isSharing,
        sessionId,
        myName,
        participants,
        createSession,
        joinSession,
        leaveSession,
        updateCode,
        updateLanguage,
        updateStdin,
        onCodeUpdate,
        onLanguageUpdate,
        onStdinUpdate,
        error
    };
}
