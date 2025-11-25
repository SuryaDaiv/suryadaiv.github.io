import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Code, ChevronRight, Play } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import AdSlot from '../components/ui/AdSlot';
import { languageContent } from '../lib/content';
import SEO from '../components/SEO';

const LanguageHub = () => {
    const { lang } = useParams();
    const content = languageContent[lang?.toLowerCase()] || languageContent['python']; // Fallback to Python

    if (!content) return <div>Language not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero */}
            <div className="bg-white border-b border-border">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-secondary mb-6">{content.title}</h1>
                        <div className="space-y-4 text-lg text-gray-600 mb-8">
                            {content.intro.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link to={`/${lang}/introduction`}>
                                <Button size="lg">Start from Beginning</Button>
                            </Link>
                            <Link to="/compiler">
                                <Button variant="outline" size="lg" className="gap-2">
                                    <Play size={16} /> Open {content.name} Compiler
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <AdSlot position="hub_top" />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content: Tutorials */}
                    <div className="lg:col-span-2 space-y-12">
                        {content.sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                                    <BookOpen className="text-primary" size={24} /> {section.title}
                                </h2>
                                <div className="grid gap-4">
                                    {section.items.map((item, i) => (
                                        <Link key={i} to={`/${lang}/${item.slug}`} className="block group">
                                            <Card className="hover:border-primary transition-colors">
                                                <CardContent className="p-4 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-6 h-6 rounded-full bg-blue-100 text-primary text-xs font-bold flex items-center justify-center">
                                                            {i + 1}
                                                        </span>
                                                        <span className="font-medium text-secondary group-hover:text-primary transition-colors">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                                {idx === 0 && <AdSlot position="hub_middle" className="mt-8" />}
                            </div>
                        ))}
                    </div>

                    {/* Sidebar: Examples & References */}
                    <div className="space-y-8">
                        {/* Examples */}
                        <Card>
                            <div className="p-4 border-b border-border bg-gray-50 rounded-t-xl">
                                <h3 className="font-bold text-secondary flex items-center gap-2">
                                    <Code size={20} className="text-primary" /> Popular Examples
                                </h3>
                            </div>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {content.examples.map((ex, i) => (
                                        <Link
                                            key={i}
                                            to={`/${lang}/examples/${ex.slug}`}
                                            className="block p-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors"
                                        >
                                            {ex.title}
                                        </Link>
                                    ))}
                                </div>
                                <div className="p-4 border-t border-border">
                                    <Link to="/examples" className="text-sm font-medium text-primary hover:underline flex items-center justify-center">
                                        View All Examples <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <AdSlot position="hub_sidebar" />

                        {/* References */}
                        <Card>
                            <div className="p-4 border-b border-border bg-gray-50 rounded-t-xl">
                                <h3 className="font-bold text-secondary flex items-center gap-2">
                                    <BookOpen size={20} className="text-primary" /> References
                                </h3>
                            </div>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {content.references.map((ref, i) => (
                                        <Link
                                            key={i}
                                            to={`/${lang}/reference/${ref.slug}`}
                                            className="block p-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors"
                                        >
                                            {ref.title}
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageHub;
