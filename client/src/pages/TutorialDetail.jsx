import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, BarChart, Play, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import AdSlot from '../components/ui/AdSlot';
import { getTutorialContent } from '../lib/content';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

const TutorialDetail = () => {
    const { lang, slug } = useParams();
    const [content, setContent] = useState(null);
    const [copied, setCopied] = useState(null);

    useEffect(() => {
        if (lang && slug) {
            setContent(getTutorialContent(lang, slug));
        }
    }, [lang, slug]);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    if (!content) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Breadcrumbs */}
            <div className="bg-gray-50 border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <Link to={`/${lang}`} className="hover:text-primary capitalize">{lang}</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <span className="text-secondary font-medium truncate">{content.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{content.title}</h1>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-border">
                            <span className="flex items-center gap-1">
                                <Clock size={16} /> {content.meta.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <BarChart size={16} /> {content.meta.difficulty}
                            </span>
                            <span>Updated: {content.meta.updated}</span>
                        </div>

                        <AdSlot position="article_top" className="mb-8" />

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
                            <h3 className="font-bold text-secondary mb-3">What you'll learn:</h3>
                            <ul className="space-y-2">
                                {content.summary.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="prose prose-blue max-w-none">
                            {content.sections.map((section, idx) => (
                                <div key={idx} className="mb-10">
                                    <h2 className="text-2xl font-bold text-secondary mb-4">{section.heading}</h2>

                                    {section.type === 'text' && (
                                        <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                                    )}

                                    {section.type === 'code' && (
                                        <div className="relative mt-4 mb-6 group">
                                            <div className="absolute right-2 top-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="h-8 px-2 bg-gray-700 text-white hover:bg-gray-600"
                                                    onClick={() => handleCopy(section.content)}
                                                >
                                                    {copied === section.content ? <Check size={14} /> : <Copy size={14} />}
                                                </Button>
                                                <Link to="/compiler">
                                                    <Button size="sm" className="h-8 px-3 gap-1">
                                                        <Play size={14} /> Run
                                                    </Button>
                                                </Link>
                                            </div>
                                            <pre className="bg-[#1e1e1e] text-gray-300 p-4 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed">
                                                <code>{section.content}</code>
                                            </pre>
                                        </div>
                                    )}

                                    {idx === 1 && <AdSlot position="article_middle" className="my-8" />}
                                </div>
                            ))}
                        </div>

                        <AdSlot position="article_bottom" className="my-12" />

                        {/* Navigation */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-border">
                            <Button variant="outline" className="h-auto py-4 px-6 flex flex-col items-start gap-1">
                                <span className="text-xs text-gray-500">Previous Tutorial</span>
                                <span className="font-medium text-secondary">Introduction to {lang}</span>
                            </Button>
                            <Button variant="outline" className="h-auto py-4 px-6 flex flex-col items-end gap-1 text-right">
                                <span className="text-xs text-gray-500">Next Tutorial</span>
                                <span className="font-medium text-secondary">{lang} Variables & Data Types</span>
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/4 space-y-8">
                        <Card>
                            <CardContent className="p-0">
                                <div className="p-4 border-b border-border bg-gray-50 rounded-t-xl">
                                    <h3 className="font-bold text-secondary">More Tutorials</h3>
                                </div>
                                <div className="divide-y divide-border">
                                    {['Introduction', 'Syntax', 'Variables', 'Data Types', 'If...Else', 'Loops'].map((item, i) => (
                                        <Link
                                            key={i}
                                            to={`/${lang}/${item.toLowerCase().replace('...', '-').replace(' ', '-')}`}
                                            className={cn(
                                                "block p-3 text-sm hover:bg-blue-50 hover:text-primary transition-colors",
                                                slug?.includes(item.toLowerCase().split(' ')[0]) ? "bg-blue-50 text-primary font-medium" : "text-gray-600"
                                            )}
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <AdSlot position="sidebar_right" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialDetail;
