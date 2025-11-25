import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tutorialDetail } from '../lib/content';
import { BRAND, SITE_URL } from '../config';
import AdSlot from '../components/ui/AdSlot';
import { Button } from '../components/ui/Button';
import SEO from '../components/SEO';

const codeSamples = {
  basic: `if condition:
    print("Condition is true")
else:
    print("Condition is false")`,
  elif: `score = 82
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"
print(grade)`,
};

export default function TutorialDetail() {
  const { lang, slug } = useParams();
  const canonical = `${SITE_URL}/tutorials/${lang}/${slug}`;

  // In a real app we'd lookup content. For now use python if/else stub.
  const content = useMemo(() => tutorialDetail, []);

  return (
    <article className="pb-16">
      <SEO
        title={`${content.title} - Explained with Examples`}
        description="Learn the Python if...else statement with syntax, examples, common mistakes, and practice prompts."
        url={canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}` },
              { '@type': 'ListItem', position: 2, name: 'Python', item: `${SITE_URL}/tutorials/python` },
              { '@type': 'ListItem', position: 3, name: content.title, item: canonical },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${content.title} | ${BRAND}`,
            datePublished: '2025-11-24',
            dateModified: '2025-11-24',
            author: { '@type': 'Organization', name: BRAND },
            description: content.summary,
            mainEntityOfPage: canonical,
          }),
        }}
      />

      <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="text-[var(--color-primary)] hover:underline">Home</Link>
        <span>/</span>
        <Link to={`/tutorials/${lang}`} className="text-[var(--color-primary)] hover:underline capitalize">{lang}</Link>
        <span>/</span>
        <span className="text-slate-600">{content.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mt-3">{content.title}</h1>
      <div className="text-sm text-slate-500 mt-2">
        Updated: {content.updated} · {content.readTime} · Difficulty: {content.difficulty}
      </div>

      <div className="mt-5 bg-white border border-[var(--color-border)] rounded-2xl p-4 shadow-sm">
        <div className="font-semibold text-[var(--color-ink)] mb-2">What you’ll learn</div>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>How the basic if and if...else syntax works.</li>
          <li>How to chain multiple conditions using elif.</li>
          <li>Common mistakes with indentation and logical operators.</li>
        </ul>
      </div>

      <div className="my-8">
        <AdSlot position="article_top" />
      </div>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">What Is the if...else Statement in Python?</h2>
          <p className="mt-2">An if...else statement lets your program run different code blocks based on whether a condition is true or false. It keeps your logic organized and makes decisions explicit.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Basic Syntax</h2>
          <div className="code-block p-4 mt-2 overflow-auto">
            <pre className="text-sm">{codeSamples.basic}</pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">if...elif...else Ladder</h2>
          <div className="code-block p-4 mt-2 overflow-auto">
            <pre className="text-sm">{codeSamples.elif}</pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Common Mistakes & Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Keep indentation consistent—spaces or tabs, but not both.</li>
            <li>Use elif for multiple branches instead of nested ifs when possible.</li>
            <li>Order conditions from most specific to most general to avoid surprises.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Practice: Try It Yourself</h2>
          <p className="mt-2">Open the snippet in the online compiler and modify the conditions to match your own rules.</p>
          <Link to="/compiler">
            <Button className="mt-3">Run this code</Button>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">FAQ</h2>
          <div className="space-y-2 mt-2">
            <div>
              <h3 className="font-semibold text-[var(--color-ink)]">Is else mandatory in if statements?</h3>
              <p>No. You can use a simple if without else if you only need one branch.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-ink)]">Can I have multiple elif blocks?</h3>
              <p>Yes. Add as many elif blocks as you need to represent different conditions cleanly.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-8">
        <AdSlot position="article_middle" />
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <Link to={`/tutorials/${lang}`} className="block">
          <div className="border border-[var(--color-border)] rounded-xl p-4 hover:border-blue-200 hover:shadow-md transition">
            <div className="text-xs text-slate-500">Previous Tutorial</div>
            <div className="font-semibold text-[var(--color-ink)]">Python Syntax & Variables</div>
          </div>
        </Link>
        <Link to={`/tutorials/${lang}`} className="block">
          <div className="border border-[var(--color-border)] rounded-xl p-4 hover:border-blue-200 hover:shadow-md transition">
            <div className="text-xs text-slate-500">Next Tutorial</div>
            <div className="font-semibold text-[var(--color-ink)]">Python Loops</div>
          </div>
        </Link>
      </div>

      <div className="mt-10">
        <AdSlot position="article_bottom" />
      </div>
    </article>
  );
}
