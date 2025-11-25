import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, BookOpen, Laptop2, ShieldCheck, Users, Globe2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import AdSlot from '../components/ui/AdSlot';
import SEO from '../components/SEO';
import { languageCards, featuredTutorials, featuredExamples, blogPosts } from '../lib/content';

export default function HomePage() {
  return (
    <div className="pb-16">
      <SEO
        title="Learn to Code & Run Programs Online"
        description="CodeOrbit combines structured tutorials, a fast online compiler, and real-world examples to help you learn Python, JavaScript, C++, Java, SQL and more."
      />

      {/* Hero */}
      <section className="gradient-hero rounded-[32px] mt-6 px-6 py-14 card-shadow overflow-hidden relative">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative z-10">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-100">
              <Sparkles size={14} /> New for learners
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--color-ink)] mt-4">
              Learn to Code & Run Programs Right in Your Browser
            </h1>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl">
              Interactive tutorials, instant compiler, and real-world examples to help you learn programming faster. No installs, no friction.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/compiler">
                <Button size="lg">
                  <Code2 size={18} />
                  Start Coding Now
                </Button>
              </Link>
              <Link to="/tutorials/python">
                <Button size="lg" variant="outline" className="gap-2">
                  Browse Tutorials <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <div className="mt-4 text-sm text-slate-500 flex flex-wrap gap-4">
              <span>Free to use. No installation required.</span>
              <span>70+ languages with templates.</span>
              <span>Ad-supported, clearly separated.</span>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-[var(--color-border)] p-5 shadow-[0_24px_80px_-32px_rgba(37,99,235,0.3)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">Py</div>
              <div>
                <div className="font-semibold text-[var(--color-ink)]">Python • Online Compiler</div>
                <div className="text-xs text-slate-500">Runs in an isolated sandbox</div>
              </div>
            </div>
            <div className="code-block p-4 text-sm overflow-auto">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>main.py</span>
                <span>Ctrl/Cmd + Enter to run</span>
              </div>
              <pre className="whitespace-pre leading-relaxed text-[13px]">
{`def greet(name: str) -> str:
    return f"Hello, {name}! Ready to code?"

print(greet("Orbit"))`}
              </pre>
              <div className="mt-4 rounded-xl bg-[#0b1222] border border-slate-800 p-3 text-xs text-slate-200">
                <div className="flex items-center gap-2 mb-1 text-green-400 font-semibold">● Output</div>
                <pre className="text-[13px] whitespace-pre-wrap">Hello, Orbit! Ready to code?</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Explorer */}
      <section className="mt-16">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Learn Programming by Language</h2>
          <Link to="/tutorials/python" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
            See all tutorials
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languageCards.map((lang) => (
            <Card key={lang.id} className="hover:-translate-y-1 hover:shadow-xl transition-all">
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-[var(--color-ink)]">{lang.name}</div>
                  {lang.badge && (
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                      {lang.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{lang.summary}</p>
                <div className="flex gap-2 flex-wrap">
                  <Link to={lang.slug}>
                    <Button size="sm" variant="outline" className="rounded-lg">
                      Start Tutorial
                    </Button>
                  </Link>
                  {lang.compilerPath && (
                    <Link to={lang.compilerPath}>
                      <Button size="sm" variant="ghost" className="rounded-lg text-[var(--color-primary)]">
                        Open Compiler
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Tutorials & Examples */}
      <section className="mt-16 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[var(--color-ink)]">Popular Tutorials</h3>
            <Link to="/tutorials/python" className="text-sm text-[var(--color-primary)] font-semibold">View all</Link>
          </div>
          <div className="space-y-3">
            {featuredTutorials.map((item) => (
              <Card key={item.slug} className="hover:border-blue-200 hover:shadow-lg transition">
                <CardContent className="flex flex-col gap-1">
                  <Link to={item.slug} className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
                    {item.title}
                  </Link>
                  <p className="text-sm text-slate-600">{item.summary}</p>
                  <div className="text-xs text-slate-500">{item.difficulty} • {item.readTime}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[var(--color-ink)]">Popular Code Examples</h3>
            <Link to="/examples/python/add-two-numbers" className="text-sm text-[var(--color-primary)] font-semibold">View all</Link>
          </div>
          <div className="space-y-3">
            {featuredExamples.map((item) => (
              <Card key={item.slug} className="hover:border-blue-200 hover:shadow-lg transition">
                <CardContent className="flex flex-col gap-1">
                  <Link to={item.slug} className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
                    {item.title}
                  </Link>
                  <p className="text-sm text-slate-600">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10">
        <AdSlot position="home_between_sections_1" />
      </div>

      {/* Why CodeOrbit */}
      <section className="mt-16">
        <h3 className="text-xl font-bold text-[var(--color-ink)] mb-6">Why CodeOrbit?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Beginner-friendly tutorials', icon: BookOpen, copy: 'Step-by-step guides with runnable snippets and clear structure.' },
            { title: 'Online compiler in browser', icon: Laptop2, copy: 'Run 70+ languages instantly with templates and sharing.' },
            { title: 'Practice with examples', icon: Code2, copy: 'Copy, tweak, and run real-world code in seconds.' },
            { title: 'No setup, no friction', icon: ShieldCheck, copy: 'Sandboxed execution with clear safety and ad policies.' },
          ].map((item) => (
            <Card key={item.title} className="hover:-translate-y-1 transition-transform">
              <CardContent className="space-y-2">
                <item.icon className="text-[var(--color-primary)]" size={22} />
                <div className="font-semibold text-[var(--color-ink)]">{item.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Online Compiler Highlight */}
      <section className="mt-16 grid lg:grid-cols-[1fr_0.7fr] gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-[var(--color-ink)]">Code Online with CodeOrbit</h3>
          <p className="text-slate-600 mt-3 leading-relaxed text-lg">
            Write, run, and share code in 70+ languages from any device. Launch fast, switch languages, and keep focus on solving problems.
          </p>
          <ul className="mt-5 space-y-2 text-slate-700">
            <li>• Fast startup, no installation.</li>
            <li>• Shareable links to your code.</li>
            <li>• Works on desktop and mobile.</li>
          </ul>
          <div className="flex gap-3 mt-6">
            <Link to="/compiler">
              <Button size="lg">Open Online Compiler</Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-xl">View Templates</Button>
          </div>
        </div>
        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="bg-slate-900 text-white">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
                Live Editor
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#111827] border border-slate-800 p-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>JavaScript</span>
                    <span>Ready</span>
                  </div>
                  <pre className="text-[13px] text-slate-200 whitespace-pre-wrap leading-relaxed">
{`const nums = [1,2,3,4,5];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);`}
                  </pre>
                </div>
                <div className="rounded-xl bg-[#0b1222] border border-slate-800 p-3">
                  <div className="flex items-center gap-2 text-xs text-green-400 font-semibold mb-1">● Output</div>
                  <pre className="text-[13px] whitespace-pre-wrap text-slate-100">[2,4]</pre>
                  <div className="mt-3 text-[12px] text-slate-400">Ads appear below the editor, clearly labelled.</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="hidden lg:block absolute -left-10 bottom-0">
            <AdSlot position="sidebar_right" height={200} />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[var(--color-ink)]">Latest from the CodeOrbit Blog</h3>
          <Link to="/blog" className="text-sm font-semibold text-[var(--color-primary)]">View all blog posts</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {blogPosts.slice(0, 3).map((post) => (
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
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { title: 'X+ learners', icon: Users, text: 'Growing community of self-learners and students.' },
          { title: 'Y+ code runs/month', icon: Globe2, text: 'Runs in the cloud with low latency.' },
          { title: 'Trusted by teams', icon: ShieldCheck, text: 'Transparent policies and ad separation.' },
        ].map((item) => (
          <Card key={item.title} className="text-center py-8">
            <CardContent className="space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <div className="text-lg font-bold">{item.title}</div>
              <p className="text-sm text-slate-600">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="mt-12">
        <AdSlot position="home_between_sections_2" />
      </div>
    </div>
  );
}
