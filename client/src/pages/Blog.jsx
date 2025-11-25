import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import AdSlot from '../components/ui/AdSlot';
import SEO from '../components/SEO';

const Blog = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Python', 'JavaScript', 'Career', 'Best Practices'];

    const posts = [
        {
            id: 1,
            title: 'Python vs JavaScript: Which Should You Learn First in 2025?',
            summary: 'Choosing your first programming language can feel overwhelming. Python and JavaScript are two of the most popular options for beginners, but they’re used for slightly different things.',
            category: 'Career',
            date: 'Nov 24, 2025',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            title: '10 Common Beginner Mistakes in Python (and How to Fix Them)',
            summary: 'From indentation errors to mutable default arguments, we cover the most common pitfalls new Python developers face and how to avoid them.',
            category: 'Python',
            date: 'Nov 20, 2025',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 3,
            title: 'How to Learn Programming Fast: A Practical Roadmap',
            summary: 'Learning to code is a marathon, not a sprint. But there are ways to optimize your learning path. Here is a step-by-step roadmap to go from zero to hero.',
            category: 'Best Practices',
            date: 'Nov 15, 2025',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 4,
            title: 'Understanding Time Complexity in Plain English',
            summary: 'Big O notation doesn\'t have to be scary. We explain time complexity using simple analogies that anyone can understand.',
            category: 'Best Practices',
            date: 'Nov 10, 2025',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 5,
            title: 'Top 20 Python Interview Questions for Freshers',
            summary: 'Preparing for your first Python developer interview? Make sure you know the answers to these essential questions.',
            category: 'Career',
            date: 'Nov 05, 2025',
            readTime: '15 min read',
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 6,
            title: 'JavaScript ES6+ Features You Should Know',
            summary: 'Modern JavaScript has come a long way. Here are the most important ES6+ features that every JavaScript developer should master.',
            category: 'JavaScript',
            date: 'Oct 28, 2025',
            readTime: '9 min read',
            image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    const filteredPosts = activeTab === 'All' ? posts : posts.filter(post => post.category === activeTab);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white border-b border-border">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-secondary mb-4">CodeOrbit Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tutorials, tips, and roadmaps to help you become a better developer.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === cat
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="group h-full">
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-transparent hover:border-primary">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider rounded">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                        {post.summary}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} /> {post.readTime}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg">Load More Posts</Button>
                </div>

                <AdSlot position="blog_bottom" className="mt-16" />
            </div>
        </div>
    );
};

export default Blog;
