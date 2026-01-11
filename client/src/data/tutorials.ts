export interface TutorialChapter {
    id: string;
    title: string;
    excerpt: string;
    content: string;
}

export interface TutorialSeries {
    id: string; // e.g., 'python', 'javascript'
    title: string;
    description: string;
    chapters: TutorialChapter[];
}

export const TUTORIALS: TutorialSeries[] = [
    {
        id: 'python',
        title: 'Python for Beginners',
        description: 'Learn Python from scratch. Master the fundamentals of the most popular language.',
        chapters: [
            {
                id: 'getting-started',
                title: 'Getting Started',
                excerpt: 'Installation free environment. Just code.',
                content: `
          <h2>Welcome to Python</h2>
          <p>Python is an interpreted, high-level, general-purpose programming language.</p>
          <h3>Your First Code</h3>
          <p>In the editor, type:</p>
          <pre>print("Hello World")</pre>
          <p>Click Run.</p>
        `
            },
            {
                id: 'variables',
                title: 'Variables',
                excerpt: 'Storing data in variables.',
                content: `
          <h2>Variables</h2>
          <p>Variables are containers for storing data values.</p>
          <pre>x = 5
y = "John"
print(x)
print(y)</pre>
        `
            }
        ]
    },
    {
        id: 'javascript',
        title: 'Modern JavaScript',
        description: 'Master the language of the web.',
        chapters: [
            {
                id: 'intro',
                title: 'Introduction to JS',
                excerpt: 'What is JavaScript?',
                content: `<h2>JavaScript</h2><p>JavaScript is the programming language of the Web.</p>`
            },
            {
                id: 'data-types',
                title: 'Data Types',
                excerpt: 'Strings, Numbers, Booleans.',
                content: `<h2>Data Types</h2><p>JavaScript has dynamic types.</p>`
            }
        ]
    }
];
