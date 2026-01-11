import { useParams, Link } from 'react-router-dom';
import { TUTORIALS } from '../data/tutorials';
import { THEME } from '../config';
import SEOHead from '../components/SEOHead';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, List } from 'lucide-react';
import { useState } from 'react';

export default function TutorialPage() {
    const { seriesId, chapterId } = useParams();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const series = TUTORIALS.find(s => s.id === seriesId);
    const chapter = series?.chapters.find(c => c.id === chapterId);

    if (!series || !chapter) {
        return <NotFound />;
    }

    const currentIndex = series.chapters.findIndex(c => c.id === chapterId);
    const prevChapter = series.chapters[currentIndex - 1];
    const nextChapter = series.chapters[currentIndex + 1];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Tutorials",
            "item": "https://coderpalace.com/tutorials"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": series.title,
            "item": `https://coderpalace.com/tutorials/${series.id}/${series.chapters[0].id}`
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": chapter.title
        }]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": `${chapter.title} - ${series.title}`,
        "description": chapter.excerpt,
        "articleSection": series.title,
        "articleBody": chapter.content
    };

    return (
        <>
            <SEOHead
                title={`${chapter.title} - ${series.title}`}
                description={chapter.excerpt}
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-60px)]">
                {/* Mobile Sidebar Toggle */}
                <div className="md:hidden p-4 border-b border-white/5 flex items-center justify-between">
                    <span className="font-semibold text-gray-200">{series.title}</span>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-white/5 rounded">
                        <List size={20} />
                    </button>
                </div>

                {/* Sidebar */}
                <aside className={`
          ${sidebarOpen ? 'block' : 'hidden'} md:block 
          w-full md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/5 bg-slate-900/30 overflow-y-auto
        `}>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-400 text-xs uppercase tracking-wider mb-4 hidden md:block">{series.title}</h3>
                        <ul className="space-y-1">
                            {series.chapters.map((c, i) => (
                                <li key={c.id}>
                                    <Link
                                        to={`/tutorials/${series.id}/${c.id}`}
                                        className={`block px-3 py-2 rounded text-sm transition-colors ${c.id === chapterId
                                                ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-400'
                                                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                            }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        {i + 1}. {c.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
                        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
                            <Link to="/tutorials" className="hover:text-gray-300">Tutorials</Link>
                            <span>/</span>
                            <span className="text-gray-300">{series.title}</span>
                        </nav>

                        <h1 className="text-3xl font-bold text-white mb-6">{chapter.title}</h1>

                        <div
                            className="prose prose-invert max-w-none text-gray-300 mb-12"
                            dangerouslySetInnerHTML={{ __html: chapter.content }}
                        />

                        {/* Navigation */}
                        <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-8">
                            {prevChapter ? (
                                <Link
                                    to={`/tutorials/${series.id}/${prevChapter.id}`}
                                    className={`flex items-center gap-2 text-sm ${THEME.secondaryBtn}`}
                                >
                                    <ChevronLeft size={16} />
                                    <div>
                                        <div className="text-xs text-gray-400 text-left">Previous</div>
                                        <div>{prevChapter.title}</div>
                                    </div>
                                </Link>
                            ) : <div />}

                            {nextChapter ? (
                                <Link
                                    to={`/tutorials/${series.id}/${nextChapter.id}`}
                                    className={`flex items-center gap-2 text-sm ${THEME.primaryBtn}`}
                                >
                                    <div>
                                        <div className="text-xs text-white/70 text-right">Next</div>
                                        <div>{nextChapter.title}</div>
                                    </div>
                                    <ChevronRight size={16} />
                                </Link>
                            ) : <div />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
