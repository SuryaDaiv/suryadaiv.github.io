export type LanguageCard = {
  id: string;
  name: string;
  badge?: string;
  summary: string;
  slug: string;
  compilerPath?: string;
};

export type TutorialItem = {
  title: string;
  slug: string;
  summary: string;
  readTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
};

export type LanguageHubContent = {
  name: string;
  title: string;
  description: string;
  intro: string[];
  sections: { title: string; items: TutorialItem[] }[];
  examples: TutorialItem[];
  references: { title: string; slug: string }[];
};

export const languageCards: LanguageCard[] = [
  { id: 'python', name: 'Python', badge: 'Beginner-friendly', summary: 'Great for automation, data, and quick wins.', slug: '/tutorials/python', compilerPath: '/compiler?lang=python' },
  { id: 'javascript', name: 'JavaScript', badge: 'Most popular', summary: 'Web-first language with endless ecosystem.', slug: '/tutorials/javascript', compilerPath: '/compiler?lang=node' },
  { id: 'cpp', name: 'C++', badge: 'Performance', summary: 'Control memory, build games and engines.', slug: '/tutorials/cpp', compilerPath: '/compiler?lang=cpp' },
  { id: 'java', name: 'Java', badge: 'Enterprise', summary: 'Batteries-included OOP for web and Android.', slug: '/tutorials/java', compilerPath: '/compiler?lang=java' },
  { id: 'sql', name: 'SQL', badge: 'Data', summary: 'Query, aggregate, and explore your datasets.', slug: '/tutorials/sql', compilerPath: '/compiler?lang=sql' },
  { id: 'c', name: 'C', badge: 'Systems', summary: 'Tight, low-level control for embedded or OS work.', slug: '/tutorials/c', compilerPath: '/compiler?lang=c' },
  { id: 'go', name: 'Go', badge: 'Cloud-native', summary: 'Lightweight concurrency and great tooling.', slug: '/tutorials/go', compilerPath: '/compiler?lang=go' },
  { id: 'rust', name: 'Rust', badge: 'Memory-safe', summary: 'Safety plus performance for systems work.', slug: '/tutorials/rust', compilerPath: '/compiler?lang=rust' },
  { id: 'kotlin', name: 'Kotlin', badge: 'Android', summary: 'Modern JVM language with expressive syntax.', slug: '/tutorials/kotlin', compilerPath: '/compiler?lang=kotlin' },
];

export const featuredTutorials: TutorialItem[] = [
  { title: 'Getting Started with Python', slug: '/tutorials/python/getting-started', summary: 'Install options, online compiler, and your first print statement.', readTime: '7 min', difficulty: 'Beginner' },
  { title: 'Python if...else Explained for Beginners', slug: '/tutorials/python/if-else-statement', summary: 'Branching logic with practical patterns and pitfalls.', readTime: '8 min', difficulty: 'Beginner' },
  { title: 'JavaScript Functions - A Complete Guide', slug: '/tutorials/javascript/functions', summary: 'Declarations, expressions, closures, and arrow functions.', readTime: '10 min', difficulty: 'Intermediate' },
  { title: 'Mastering SQL SELECT Basics', slug: '/tutorials/sql/select', summary: 'Filtering, sorting, and joining tables with clear examples.', readTime: '9 min', difficulty: 'Beginner' },
  { title: 'C++ Loops and Control Flow', slug: '/tutorials/cpp/loops', summary: 'for, while, range-based loops, and common mistakes.', readTime: '8 min', difficulty: 'Intermediate' },
  { title: 'Java OOP Essentials', slug: '/tutorials/java/oop-basics', summary: 'Classes, objects, and interfaces with compact samples.', readTime: '12 min', difficulty: 'Intermediate' },
];

export const featuredExamples: TutorialItem[] = [
  { title: 'Add Two Numbers in Python', slug: '/examples/python/add-two-numbers', summary: 'Simple arithmetic with input handling and tests.' },
  { title: 'Check Prime Number in C++', slug: '/examples/cpp/check-prime', summary: 'Efficient primality with loop break conditions.' },
  { title: 'SQL SELECT Basics with Examples', slug: '/examples/sql/select-basics', summary: 'Select, where, and order by in one-page cheats.' },
  { title: 'Reverse a String in JavaScript', slug: '/examples/javascript/reverse-string', summary: 'Split, reverse, and join with edge cases.' },
  { title: 'Fibonacci Sequence in Java', slug: '/examples/java/fibonacci', summary: 'Iterative and recursive variants compared.' },
  { title: 'Calculate Factorial Using Recursion (C)', slug: '/examples/c/factorial', summary: 'Base conditions and stack considerations.' },
];

export const blogPosts = [
  { slug: 'python-vs-javascript-2025', category: 'Career', title: 'Python vs JavaScript: Which Should You Learn First in 2025?', summary: 'Compare difficulty, jobs, and projects to pick the right starting language.', readTime: '8 min', date: 'Nov 2025' },
  { slug: 'python-beginner-mistakes', category: 'Python', title: '10 Common Beginner Mistakes in Python (and How to Fix Them)', summary: 'Indentation, mutability, virtualenvs, and how to debug them fast.', readTime: '9 min', date: 'Nov 2025' },
  { slug: 'learn-programming-fast', category: 'Best Practices', title: 'How to Learn Programming Fast: A Practical Roadmap for Beginners', summary: 'A four-week plan with checkpoints, practice, and review drills.', readTime: '12 min', date: 'Oct 2025' },
  { slug: 'python-interview-questions', category: 'Career', title: 'Top 20 Python Interview Questions for Freshers', summary: 'From basics to tricky gotchas with concise sample answers.', readTime: '11 min', date: 'Sep 2025' },
  { slug: 'time-complexity-plain-english', category: 'Computer Science', title: 'Understanding Time Complexity in Plain English', summary: 'Big-O intuition, common patterns, and cheat examples.', readTime: '10 min', date: 'Aug 2025' },
  { slug: 'online-compilers-help-learning', category: 'Tools', title: 'How Online Compilers Help You Learn Faster', summary: 'Cut setup time, share snippets, and iterate on any device.', readTime: '6 min', date: 'Aug 2025' },
];

export const languageContent: Record<string, LanguageHubContent> = {
  python: {
    name: 'Python',
    title: 'Python Tutorial - Learn Python from Scratch',
    description: 'Beginner-friendly Python tutorial that teaches syntax, control flow, data structures, functions, and real-world examples.',
    intro: [
      'Python is a versatile, readable language loved for automation, web backends, and data analysis.',
      'On this hub you will start with the basics, practice with runnable snippets, then branch into deeper topics like modules and file handling.',
      'You can open any snippet in the online compiler without leaving this page.',
    ],
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Python Introduction', slug: 'introduction', summary: 'What Python is, why it matters, and how CodeOrbit helps you learn.' },
          { title: 'Python Syntax & Variables', slug: 'syntax-variables', summary: 'Whitespace, identifiers, and dynamic typing explained.' },
          { title: 'Python Data Types', slug: 'data-types', summary: 'Numbers, strings, lists, tuples, dicts, and when to use each.' },
          { title: 'Input, Output, and Comments', slug: 'io-and-comments', summary: 'Printing, reading input safely, and documenting intent.' },
        ],
      },
      {
        title: 'Control Flow',
        items: [
          { title: 'if...else Statement', slug: 'if-else-statement', summary: 'Branching logic with elif ladders and patterns.' },
          { title: 'Loops (for, while)', slug: 'loops', summary: 'Iterate collections, break early, and use else clauses.' },
          { title: 'Comprehensions', slug: 'comprehensions', summary: 'List, dict, and set comprehensions for expressive code.' },
        ],
      },
      {
        title: 'Functions & Modules',
        items: [
          { title: 'Defining Functions', slug: 'functions', summary: 'Parameters, return values, annotations, and docstrings.' },
          { title: 'Error Handling with try/except', slug: 'error-handling', summary: 'Catching exceptions and failing gracefully.' },
          { title: 'Modules & Packages', slug: 'modules-packages', summary: 'Import patterns and organizing reusable code.' },
        ],
      },
    ],
    examples: [
      { title: 'Add Two Numbers', slug: 'add-two-numbers', summary: 'Read input, convert to numbers, and print the sum.' },
      { title: 'Check Leap Year', slug: 'check-leap-year', summary: 'Boolean logic with modulo and condition chains.' },
      { title: 'Fibonacci Sequence', slug: 'fibonacci', summary: 'Iterative vs recursive implementations compared.' },
      { title: 'Factorial Using Recursion', slug: 'factorial-recursion', summary: 'Base conditions and stack depth considerations.' },
    ],
    references: [
      { title: 'Built-in Functions', slug: 'builtins' },
      { title: 'List Methods', slug: 'list-methods' },
      { title: 'String Methods', slug: 'string-methods' },
    ],
  },
  javascript: {
    name: 'JavaScript',
    title: 'JavaScript Tutorial - Modern JS from Basics to Apps',
    description: 'Master JS fundamentals, DOM interactions, and modern patterns with runnable examples.',
    intro: [
      'JavaScript powers the web and increasingly runs everywhere via Node.js.',
      'This track starts with variables and functions, then moves into arrays, objects, and async patterns.',
    ],
    sections: [
      {
        title: 'Essentials',
        items: [
          { title: 'JS Introduction', slug: 'intro', summary: 'What JS does in browsers and servers.' },
          { title: 'Variables & Types', slug: 'variables', summary: 'let vs const, primitives vs references.' },
          { title: 'Functions & Scope', slug: 'functions', summary: 'Hoisting, closures, and arrow functions.' },
        ],
      },
      {
        title: 'Core APIs',
        items: [
          { title: 'Arrays & Iteration', slug: 'arrays', summary: 'Map, filter, reduce with examples.' },
          { title: 'Objects & Prototypes', slug: 'objects', summary: 'Shorthand, destructuring, prototypal inheritance.' },
          { title: 'Async/Await', slug: 'async-await', summary: 'Promises, async flows, and error handling.' },
        ],
      },
    ],
    examples: [
      { title: 'Reverse a String', slug: 'reverse-string', summary: 'Classic string manipulation example.' },
      { title: 'Debounce Helper', slug: 'debounce', summary: 'Control rapid-fire events in the browser.' },
    ],
    references: [
      { title: 'Array Methods', slug: 'array-methods' },
      { title: 'String Methods', slug: 'string-methods' },
    ],
  },
  cpp: {
    name: 'C++',
    title: 'C++ Tutorial - Foundations for Systems and Games',
    description: 'Learn C++ syntax, memory management, STL, and modern patterns with practical snippets.',
    intro: [
      'C++ gives you low-level control with high performance and modern abstractions.',
      'Start with compilation basics, move into control flow, then explore functions and STL containers.',
    ],
    sections: [
      { title: 'Basics', items: [{ title: 'C++ Introduction', slug: 'intro', summary: 'History, compilers, and hello world.' }] },
      { title: 'Control Flow', items: [{ title: 'If/Else in C++', slug: 'if-else', summary: 'Conditions, scopes, and common pitfalls.' }] },
    ],
    examples: [
      { title: 'Check Prime Number', slug: 'check-prime', summary: 'Loop and early return for primality.' },
      { title: 'Fibonacci Using Loop', slug: 'fibonacci-loop', summary: 'Iterative Fibonacci for efficiency.' },
    ],
    references: [{ title: 'STL Overview', slug: 'stl' }],
  },
};

export const tutorialDetail = {
  slug: 'if-else-statement',
  title: 'Python if...else Statement',
  summary: 'Run different blocks of code based on conditions. Learn syntax, elif chains, and common mistakes.',
  updated: 'Nov 2025',
  readTime: '7 min read',
  difficulty: 'Beginner',
};

export const exampleDetail = {
  slug: 'add-two-numbers',
  title: 'Python Program to Add Two Numbers',
  summary: 'Two small examples to add numbers with and without user input, plus a quick practice task.',
};
