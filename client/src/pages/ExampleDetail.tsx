import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { exampleDetail } from '../lib/content';
import { SITE_URL, BRAND } from '../config';
import AdSlot from '../components/ui/AdSlot';
import { Button } from '../components/ui/Button';
import SEO from '../components/SEO';

const codeExample = `# Example 1: add two numbers
num1 = 12
num2 = 7
sum = num1 + num2
print("Sum:", sum)

# Example 2: add two numbers with user input
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
print("Sum:", a + b)`;

export default function ExampleDetail() {
  const { lang, slug } = useParams();
  const canonical = `${SITE_URL}/examples/${lang}/${slug}`;

  return (
    <article className="pb-16">
      <SEO
        title={`${exampleDetail.title}`}
        description="Copy-paste friendly Python example that adds two numbers, plus a variation with user input and quick practice prompts."
        url={canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${exampleDetail.title} | ${BRAND}`,
            datePublished: '2025-11-24',
            description: exampleDetail.summary,
            mainEntityOfPage: canonical,
          }),
        }}
      />

      <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="text-[var(--color-primary)] hover:underline">Home</Link>
        <span>/</span>
        <Link to={`/tutorials/${lang}`} className="text-[var(--color-primary)] hover:underline capitalize">{lang}</Link>
        <span>/</span>
        <span className="text-slate-600">{exampleDetail.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mt-3">{exampleDetail.title}</h1>
      <p className="text-slate-600 mt-3 max-w-3xl">{exampleDetail.summary}</p>

      <div className="my-6">
        <AdSlot position="example_top" />
      </div>

      <section className="space-y-6 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Example 1: Add Two Numbers</h2>
          <div className="code-block p-4 mt-2 overflow-auto">
            <pre className="text-sm">{codeExample}</pre>
          </div>
          <p className="mt-2 text-sm text-slate-600">Tip: change the values of <code>num1</code> and <code>num2</code> to test different inputs.</p>
        </div>

        <div className="my-6">
          <AdSlot position="example_middle" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Practice</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Modify the program to add three numbers.</li>
            <li>Wrap the addition in a function and return the result.</li>
            <li>Handle invalid input by printing a friendly error.</li>
          </ul>
        </div>

        <Link to="/compiler">
          <Button className="mt-3">Run in Online Compiler</Button>
        </Link>
      </section>

      <div className="mt-10">
        <AdSlot position="example_bottom" />
      </div>
    </article>
  );
}
