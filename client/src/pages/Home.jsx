import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Code, BookOpen, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import AdSlot from '../components/ui/AdSlot';
import SEO from '../components/SEO';

const Home = () => {
    const languages = [
        { name: 'Python', icon: '🐍', desc: 'Best for beginners & AI', link: '/python', badge: 'Popular' },
        { name: 'JavaScript', icon: '⚡', desc: 'Web development', link: '/javascript', badge: 'Essential' },
        { name: 'C++', icon: '🚀', desc: 'High performance', link: '/cpp' },
        { name: 'Java', icon: '☕', desc: 'Enterprise apps', link: '/java' },
        { name: 'SQL', icon: '💾', desc: 'Data management', link: '/sql' },
        { name: 'C', icon: '©️', desc: 'System programming', link: '/c' },
    ];

    const tutorials = [
        { title: 'Getting Started with Python', category: 'Python', link: '/python/getting-started' },
        { title: 'JavaScript Functions Guide', category: 'JavaScript', link: '/javascript/functions' },
        { title: 'C++ Pointers Explained', category: 'C++', link: '/cpp/pointers' },
        { title: 'Java OOP Concepts', category: 'Java', link: '/java/oop' },
        { title: 'SQL SELECT Basics', category: 'SQL', link: '/sql/select' },
        { title: 'React Hooks Intro', category: 'React', link: '/react/hooks' },
    ];

    const examples = [
        { title: 'Add Two Numbers', lang: 'Python', link: '/python/examples/add-two-numbers' },
        { title: 'Check Prime Number', lang: 'C++', link: '/cpp/examples/prime-number' },
        { title: 'Array Filter Method', lang: 'JavaScript', link: '/javascript/examples/filter' },
        { title: 'Fibonacci Sequence', lang: 'Java', link: '/java/examples/fibonacci' },
        { title: 'Create Table', lang: 'SQL', link: '/sql/examples/create-table' },
        { title: 'Fetch API Example', lang: 'JS', link: '/javascript/examples/fetch' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-8">
                            <h1 className="text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
                                Learn to Code & <br />
                                <span className="text-primary">Run Programs</span> <br />
                                Right in Your Browser.
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Interactive tutorials, instant compiler, and real-world examples to help you learn programming faster.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/compiler">
                                    <Button size="lg" className="text-lg px-8">Start Coding Now</Button>
                                </Link>
                                <Link to="/tutorials">
                                    <Button variant="outline" size="lg" className="text-lg px-8">Browse Tutorials</Button>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                                <CheckCircle size={16} className="text-green-500" /> Free to use. No installation required.
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-secondary">
                                <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono ml-2">main.py</span>
                                </div>
                                <div className="p-6 font-mono text-sm">
                                    <div className="text-green-400">def <span className="text-blue-400">greet</span>(name):</div>
                                    <div className="text-gray-300 pl-4">print(f<span className="text-yellow-300">"Hello, &#123;name&#125;!"</span>)</div>
                                    <br />
                                    <div className="text-gray-300">greet(<span className="text-yellow-300">"CodeOrbit Learner"</span>)</div>
                                    <br />
                                    <div className="text-gray-500"># Output:</div>
                                    <div className="text-white">Hello, CodeOrbit Learner!</div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Language Explorer */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Learn Programming by Language</h2>
                        <p className="text-gray-600">Choose a language to start your journey</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {languages.map((lang) => (
                            <Card key={lang.name} className="hover:shadow-md transition-shadow group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                                <CardContent className="p-6 flex items-start justify-between">
                                    <div>
                                        <div className="text-4xl mb-4">{lang.icon}</div>
                                        <h3 className="text-xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">{lang.name}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{lang.desc}</p>
                                        <div className="flex gap-3">
                                            <Link to={lang.link} className="text-sm font-medium text-primary hover:underline">Tutorial</Link>
                                            <Link to="/compiler" className="text-sm font-medium text-gray-500 hover:text-secondary">Compiler</Link>
                                        </div>
                                    </div>
                                    {lang.badge && (
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                                            {lang.badge}
                                        </span>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <AdSlot position="home_between_sections_1" />

            {/* Featured Tutorials & Examples */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Popular Tutorials */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
                                    <BookOpen className="text-primary" size={24} /> Popular Tutorials
                                </h2>
                                <Link to="/tutorials" className="text-primary text-sm font-medium hover:underline flex items-center">
                                    View all <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                            <div className="grid gap-4">
                                {tutorials.map((tut, idx) => (
                                    <Link key={idx} to={tut.link} className="block group">
                                        <Card className="hover:border-primary transition-colors">
                                            <CardContent className="p-4 flex items-center justify-between">
                                                <div>
                                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{tut.category}</span>
                                                    <h3 className="text-lg font-medium text-secondary group-hover:text-primary transition-colors">{tut.title}</h3>
                                                </div>
                                                <ArrowRight size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Popular Examples */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
                                    <Code className="text-primary" size={24} /> Popular Examples
                                </h2>
                                <Link to="/examples" className="text-primary text-sm font-medium hover:underline flex items-center">
                                    View all <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                            <div className="grid gap-4">
                                {examples.map((ex, idx) => (
                                    <Link key={idx} to={ex.link} className="block group">
                                        <Card className="hover:border-primary transition-colors">
                                            <CardContent className="p-4 flex items-center justify-between">
                                                <div>
                                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{ex.lang}</span>
                                                    <h3 className="text-lg font-medium text-secondary group-hover:text-primary transition-colors">{ex.title}</h3>
                                                </div>
                                                <Code size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why CodeOrbit */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Beginner-Friendly</h3>
                            <p className="text-gray-600 text-sm">Structured tutorials designed for absolute beginners.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Online Compiler</h3>
                            <p className="text-gray-600 text-sm">Write and run code instantly in your browser.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Real Examples</h3>
                            <p className="text-gray-600 text-sm">Learn by doing with hundreds of code examples.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">No Setup</h3>
                            <p className="text-gray-600 text-sm">Start coding in seconds without installing anything.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Compiler Highlight */}
            <section className="py-20 bg-secondary text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Code Online with CodeOrbit.</h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Write, run, and share code in 70+ languages from any device. No setup required.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle size={20} className="text-green-400" /> Fast startup, no installation
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle size={20} className="text-green-400" /> Shareable links to your code
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle size={20} className="text-green-400" /> Works on desktop and mobile
                                </li>
                            </ul>
                            <Link to="/compiler">
                                <Button size="lg" className="bg-primary hover:bg-primary-hover text-white border-none">
                                    Open Online Compiler
                                </Button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            {/* Abstract visual representation of compiler */}
                            <div className="bg-gray-800 rounded-lg p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-gray-900 rounded border border-gray-700 p-4 h-64 flex flex-col">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="space-y-2 font-mono text-xs md:text-sm">
                                        <div className="text-purple-400">import <span className="text-white">sys</span></div>
                                        <div className="text-blue-400">def <span className="text-yellow-400">main</span>():</div>
                                        <div className="text-gray-400 pl-4"># Welcome to CodeOrbit Compiler</div>
                                        <div className="text-white pl-4">print(<span className="text-green-400">"Ready to code?"</span>)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Latest from the CodeOrbit Blog</h2>
                        <Link to="/blog" className="text-primary font-medium hover:underline">View all blog posts</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gray-200 w-full"></div>
                                <CardContent className="p-6">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Python Basics</span>
                                    <h3 className="text-xl font-bold text-secondary mb-2">Python vs JavaScript: Which Should You Learn First?</h3>
                                    <p className="text-gray-600 text-sm mb-4">Choosing your first programming language can feel overwhelming. Here's a comparison to help you decide.</p>
                                    <span className="text-xs text-gray-400">7 min read</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <AdSlot position="home_bottom" />
        </div>
    );
};

export default Home;
