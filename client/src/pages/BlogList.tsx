import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { THEME } from '../config';
import SEOHead from '../components/SEOHead';

export default function BlogList() {
    return (
        <>
            <SEOHead
                title="Blog"
                description="Articles on programming, tutorials, and updates from the team."
            />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-white">Latest Articles</h1>

                <div className="grid gap-6">
                    {BLOG_POSTS.map(post => (
                        <article key={post.id} className={`p-6 rounded-lg ${THEME.card} hover:bg-white/10 transition-colors`}>
                            <Link to={`/blog/${post.id}`}>
                                <h2 className="text-xl font-semibold text-blue-400 mb-2">{post.title}</h2>
                                <div className="text-sm text-gray-500 mb-3">{post.date} • {post.author}</div>
                                <p className="text-gray-300">{post.excerpt}</p>
                                <div className="mt-4 text-sm text-blue-500">Read more →</div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
