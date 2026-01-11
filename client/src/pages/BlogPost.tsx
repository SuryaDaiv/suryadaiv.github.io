import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { THEME } from '../config';
import SEOHead from '../components/SEOHead';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet-async';

export default function BlogPost() {
    const { id } = useParams();
    const post = BLOG_POSTS.find(p => p.id === id);

    if (!post) {
        return <NotFound />;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        }
    };

    return (
        <>
            <SEOHead
                title={post.title}
                description={post.excerpt}
                type="article"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <div className="max-w-3xl mx-auto px-4 py-12">
                <Link to="/blog" className="text-sm text-blue-400 hover:underline mb-4 inline-block">← Back to Blog</Link>

                <header className="mb-8 border-b border-gray-800 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
                    <div className="text-gray-400 text-sm">
                        {post.date} • By {post.author}
                    </div>
                </header>

                <div
                    className="prose prose-invert max-w-none text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </>
    );
}
