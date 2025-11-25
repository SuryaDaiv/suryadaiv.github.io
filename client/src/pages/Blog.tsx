import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../lib/content';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <div className="pb-16">
      <SEO
        title="CodeOrbit Blog - Tutorials, Tips & Roadmaps"
        description="Read programming tutorials, language comparisons, interview prep, and roadmap articles from the CodeOrbit team."
      />
      <div className="mt-8 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-blue-700 font-semibold mb-2">Blog</p>
          <h1 className="text-3xl font-bold text-[var(--color-ink)]">CodeOrbit Blog - Tutorials, Tips & Roadmaps</h1>
          <p className="text-slate-600 mt-2">Stay ahead with language guides, best practices, and tooling tips.</p>
        </div>
        <Button variant="outline" className="rounded-xl">Subscribe</Button>
      </div>

      <div className="mt-8 flex gap-3 text-sm font-semibold text-slate-600">
        {['All', 'Python', 'JavaScript', 'Career', 'Best Practices', 'Tools'].map((tab) => (
          <span key={tab} className="px-3 py-2 rounded-full border border-[var(--color-border)] bg-white shadow-sm">{tab}</span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:-translate-y-1 hover:shadow-xl transition">
            <CardContent className="space-y-2">
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">{post.category}</span>
              <Link to={`/blog/${post.slug}`} className="block font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
                {post.title}
              </Link>
              <p className="text-sm text-slate-600">{post.summary}</p>
              <div className="text-xs text-slate-500">{post.date} • {post.readTime}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
