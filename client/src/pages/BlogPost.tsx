import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../lib/content';
import { SITE_URL, BRAND } from '../config';
import SEO from '../components/SEO';
import AdSlot from '../components/ui/AdSlot';
import { Button } from '../components/ui/Button';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return (
    <article className="pb-16">
      <SEO
        title={`${post.title} | CodeOrbit Blog`}
        description={post.summary}
        url={canonical}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${post.title} | ${BRAND}`,
            datePublished: '2025-11-24',
            description: post.summary,
            mainEntityOfPage: canonical,
          }),
        }}
      />

      <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="text-[var(--color-primary)] hover:underline">Home</Link>
        <span>/</span>
        <Link to="/blog" className="text-[var(--color-primary)] hover:underline">Blog</Link>
        <span>/</span>
        <span className="text-slate-600">{post.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mt-3">{post.title}</h1>
      <div className="text-sm text-slate-500 mt-2">By CodeOrbit Team • {post.date} • {post.readTime}</div>

      <div className="mt-6 bg-gradient-to-br from-blue-50 to-white border border-[var(--color-border)] rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">{post.summary}</p>
      </div>

      <div className="my-6">
        <AdSlot position="blog_top" />
      </div>

      <section className="space-y-6 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-[var(--color-ink)]">What you’ll learn</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Key takeaways and practical tips.</li>
          <li>Links to related tutorials and examples.</li>
          <li>Actionable next steps to keep learning.</li>
        </ul>

        <div className="my-6">
          <AdSlot position="blog_middle" />
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-ink)]">Keep learning</h2>
        <p>
          Open the online compiler to try code snippets, or read a related tutorial to deepen your understanding.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/compiler">
            <Button>Open Online Compiler</Button>
          </Link>
          <Link to="/tutorials/python">
            <Button variant="outline">Read a Python Tutorial</Button>
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <AdSlot position="blog_bottom" />
      </div>
    </article>
  );
}
