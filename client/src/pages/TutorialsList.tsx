import { Link } from 'react-router-dom';
import { TUTORIALS } from '../data/tutorials';
import { THEME } from '../config';
import SEOHead from '../components/SEOHead';

export default function TutorialsList() {
    return (
        <>
            <SEOHead
                title="Programming Tutorials"
                description="Free, high-quality programming tutorials for Python, JavaScript, and more."
            />
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-4 text-white">Learn to Code</h1>
                <p className="text-gray-400 mb-8 max-w-2xl">
                    Comprehensive guides designed for beginners and experienced developers alike.
                    Run the code directly in your browser as you learn.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TUTORIALS.map(series => (
                        <div key={series.id} className={`p-6 rounded-lg ${THEME.card} flex flex-col`}>
                            <h2 className="text-xl font-semibold text-white mb-2">{series.title}</h2>
                            <p className="text-gray-400 text-sm mb-4 flex-1">{series.description}</p>

                            <div className="mt-4 pt-4 border-t border-white/5">
                                <div className="text-xs text-gray-500 uppercase font-semibold mb-2">Chapters</div>
                                <ul className="space-y-2 mb-4">
                                    {series.chapters.slice(0, 3).map(chapter => (
                                        <li key={chapter.id}>
                                            <Link
                                                to={`/tutorials/${series.id}/${chapter.id}`}
                                                className="text-sm text-blue-400 hover:text-blue-300 block truncate"
                                            >
                                                {chapter.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {series.chapters.length > 3 && (
                                        <li className="text-xs text-gray-500">+ {series.chapters.length - 3} more</li>
                                    )}
                                </ul>
                                <Link
                                    to={`/tutorials/${series.id}/${series.chapters[0].id}`}
                                    className={`block text-center w-full py-2 rounded ${THEME.controlBg} text-sm hover:bg-white/10 transition-colors`}
                                >
                                    Start Learning
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
