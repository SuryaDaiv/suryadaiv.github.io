export const languageContent = {
    python: {
        name: 'Python',
        title: 'Python Tutorial – Learn Python from Scratch',
        description: 'Python is a powerful, high-level programming language that is easy to learn and fun to use. It is widely used for web development, data analysis, artificial intelligence, and more.',
        intro: [
            'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.',
            'Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.',
            'Python\'s simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance.'
        ],
        sections: [
            {
                title: 'Beginner Tutorials',
                items: [
                    { title: 'Python Introduction', slug: 'introduction' },
                    { title: 'Python Installation', slug: 'installation' },
                    { title: 'Python Syntax', slug: 'syntax' },
                    { title: 'Python Variables', slug: 'variables' },
                    { title: 'Python Data Types', slug: 'data-types' },
                ]
            },
            {
                title: 'Control Flow',
                items: [
                    { title: 'Python if...else', slug: 'if-else' },
                    { title: 'Python for Loop', slug: 'for-loop' },
                    { title: 'Python while Loop', slug: 'while-loop' },
                    { title: 'Python break and continue', slug: 'break-continue' },
                ]
            },
            {
                title: 'Functions & Modules',
                items: [
                    { title: 'Python Functions', slug: 'functions' },
                    { title: 'Python Recursion', slug: 'recursion' },
                    { title: 'Python Modules', slug: 'modules' },
                ]
            }
        ],
        examples: [
            { title: 'Add Two Numbers', slug: 'add-two-numbers' },
            { title: 'Find Factorial', slug: 'factorial' },
            { title: 'Check Prime Number', slug: 'check-prime' },
            { title: 'Fibonacci Sequence', slug: 'fibonacci' },
        ],
        references: [
            { title: 'Built-in Functions', slug: 'builtin-functions' },
            { title: 'List Methods', slug: 'list-methods' },
            { title: 'String Methods', slug: 'string-methods' },
        ]
    },
    javascript: {
        name: 'JavaScript',
        title: 'JavaScript Tutorial – The Language of the Web',
        description: 'JavaScript is the programming language of the Web. It is easy to learn and versatile, allowing you to create interactive websites and powerful web applications.',
        intro: [
            'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
            'While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.',
            'JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.'
        ],
        sections: [
            {
                title: 'Introduction',
                items: [
                    { title: 'JS Introduction', slug: 'introduction' },
                    { title: 'JS Where To', slug: 'whereto' },
                    { title: 'JS Output', slug: 'output' },
                    { title: 'JS Statements', slug: 'statements' },
                ]
            },
            {
                title: 'JS Basics',
                items: [
                    { title: 'JS Variables', slug: 'variables' },
                    { title: 'JS Operators', slug: 'operators' },
                    { title: 'JS Arithmetic', slug: 'arithmetic' },
                    { title: 'JS Data Types', slug: 'datatypes' },
                ]
            }
        ]
    }
};


export const getTutorialContent = (lang, slug) => {
    // Mock content generator
    return {
        title: `${lang === 'python' ? 'Python' : 'JavaScript'} ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
        meta: {
            updated: 'November 2025',
            readTime: '7 min read',
            difficulty: 'Beginner'
        },
        summary: [
            `Learn how to use ${slug.replace(/-/g, ' ')} in ${lang}.`,
            'Understand the syntax and common use cases.',
            'Practice with real-world examples.'
        ],
        sections: [
            {
                type: 'text',
                heading: `What is ${slug.replace(/-/g, ' ')}?`,
                content: `The ${slug.replace(/-/g, ' ')} is a fundamental concept in ${lang} programming. It allows you to control the flow of your program or manipulate data efficiently.`
            },
            {
                type: 'code',
                heading: 'Basic Syntax',
                content: lang === 'python' ?
                    `# Python ${slug} syntax
if condition:
    # execute this code
else:
    # execute this code` :
                    `// JavaScript ${slug} syntax
if (condition) {
    // execute this code
} else {
    // execute this code
}`
            },
            {
                type: 'text',
                heading: 'How it Works',
                content: 'When the interpreter encounters this statement, it evaluates the condition. If true, the first block executes. Otherwise, the else block executes.'
            },
            {
                type: 'code',
                heading: 'Real World Example',
                content: lang === 'python' ?
                    `age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")` :
                    `const age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}`
            }
        ]
    };
};
