import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Code, ChevronRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import AdSlot from '../components/ui/AdSlot';
import SEO from '../components/SEO';
import { languageContent } from '../lib/content';

export default function LanguageHub() {
  const { lang } = useParams<{ lang: string }>();
  const content = lang ? languageContent[lang] : undefined;

  if (!content) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-[var(--color-ink)] mb-3">Language Not Found</h1>
        <p className="text-slate-600 mb-6">We do not have tutorials for this language yet.</p>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <SEO
        title={`${content.name} Tutorial - Learn ${content.name} from Scratch`}
        description={`Master ${content.name} with interactive tutorials, examples, references, and an online compiler.`}
      />

      <div className="mt-8 mb-6 flex items-center gap-3 text-sm text-[var(--color-primary)] font-semibold">
        <Link to="/" className="hover:underline flex items-center gap-1 text-sm"><ArrowLeft size={14} /> Home</Link>
        <span className="text-slate-400">/</span>
        <span className="text-slate-600">{content.name} Hub</span>
      </div>

      {/* Header */}
      <div className="rounded-[28px] border border-[var(--color-border)] bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex-1">
            <p className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
              Official Hub
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-4">{content.title}</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{content.description}</p>
            <div className="flex gap-3 flex-wrap">
              <Link to={`/tutorials/${lang}/${content.sections[0]?.items[0]?.slug ?? ''}`}>
                <Button size="lg" className="gap-2">
                  Start from Beginning <ChevronRight size={18} />
                </Button>
              </Link>
              <Link to={`/compiler?lang=${lang}`}>
                <Button variant="outline" size="lg" className="gap-2">
                  <Code size={18} /> Open {content.name} Compiler
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <Card>
              <CardContent className="bg-white">
                <div className="text-sm text-slate-500 mb-2">Quick Navigation</div>
                <div className="flex flex-wrap gap-2">
                  {content.sections.map((section) => (
                    <span key={section.title} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                      {section.title}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12 mt-10">
        {/* Main Content */}
        <div>
          <div className="prose prose-slate max-w-none text-slate-700">
            {content.intro.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="my-8">
            <AdSlot position="tutorial_top" />
          </div>

          {/* Tutorials List */}
          <div className="space-y-8">
            {content.sections.map((section, idx) => (
              <div key={section.title} className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[var(--color-primary)]" size={20} />
                  <h2 className="text-xl font-bold text-[var(--color-ink)]">{section.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {section.items.map((item) => (
                    <Card key={item.slug} className="hover:border-blue-200 hover:shadow-lg transition">
                      <CardContent className="space-y-1">
                        <Link
                          to={`/tutorials/${lang}/${item.slug}`}
                          className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] flex items-center justify-between"
                        >
                          {item.title}
                          <ChevronRight size={16} className="text-slate-400" />
                        </Link>
                        <p className="text-sm text-slate-600">{item.summary}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {idx === 0 && (
                  <div className="mt-4">
                    <AdSlot position="tutorial_middle" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Examples */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-2">
              <Code className="text-[var(--color-primary)]" size={20} />
              <h2 className="text-xl font-bold text-[var(--color-ink)]">Popular Examples</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.examples.map((ex) => (
                <Link key={ex.slug} to={`/examples/${lang}/${ex.slug}`} className="group">
                  <Card className="hover:border-blue-200 hover:shadow-lg transition">
                    <CardContent className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">
                          {ex.title}
                        </div>
                        <div className="text-sm text-slate-600">{ex.summary}</div>
                      </div>
                      <ExternalLink size={16} className="text-slate-400" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <AdSlot position="tutorial_bottom" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <Card className="bg-[#0F172A] text-white border-none">
            <CardContent className="space-y-3">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Why Learn {content.name}?</div>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• High demand in the job market.</li>
                <li>• Versatile and powerful for many domains.</li>
                <li>• Large community and libraries.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h3 className="font-semibold text-[var(--color-ink)]">Quick References</h3>
              <ul className="space-y-2">
                {content.references.map((ref) => (
                  <li key={ref.slug}>
                    <Link to="#" className="text-sm text-[var(--color-primary)] hover:underline">
                      {ref.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <AdSlot position="sidebar_right" />
        </aside>
      </div>
    </div>
  );
}
