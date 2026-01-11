export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown
    date: string;
    author: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'getting-started-with-python',
        title: 'Getting Started with Python',
        excerpt: 'Python is a great language for beginners. Learn how to run your first Python script.',
        date: '2023-10-15',
        author: 'Team',
        content: `
      <h2>Introduction</h2>
      <p>Python is one of the most popular programming languages in the world. It's known for its simple syntax and versatility.</p>
      <h3>Why Python?</h3>
      <p>Python is used in web development, data science, AI, and more.</p>
      <h3>Your First Program</h3>
      <pre>print("Hello, World!")</pre>
      <p>Try running this in our editor!</p>
    `
    },
    {
        id: 'javascript-basics',
        title: 'JavaScript Basics: Variables and Functions',
        excerpt: 'Understand the building blocks of the web: JS variables and functions.',
        date: '2023-10-22',
        author: 'Team',
        content: `
      <h2>Variables</h2>
      <p>In JavaScript, you can declare variables using var, let, or const.</p>
      <pre>const name = "CoderPalace";</pre>
      <h2>Functions</h2>
      <p>Functions allow you to reuse code.</p>
    `
    },
    {
        id: 'debugging-tips',
        title: '5 Debugging Tips for Beginners',
        excerpt: 'Stuck on a bug? Here are 5 tips to help you unblock yourself.',
        date: '2023-11-05',
        author: 'Team',
        content: `
      <h2>1. Read the Error Message</h2>
      <p>It sounds obvious, but error messages often tell you exactly where the problem is.</p>
      <h2>2. Print Debugging</h2>
      <p>Use print() or console.log() to see what your variables hold.</p>
    `
    }
];
