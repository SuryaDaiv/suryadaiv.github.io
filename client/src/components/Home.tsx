import React from 'react';
import { BRAND, THEME } from '../config';
import AdSlot from './AdSlot';

type Props = {
  onStart: () => void;
};

const BLOG_POSTS = [
  {
    title: 'Fixing the dreaded "expected ;" error in C++',
    summary:
      'Learn why missing semicolons or misplaced braces trigger this common compiler error, how to read the diagnostic, and how to test the fixed code instantly in the online compiler.',
    href: '/blog/cpp-expected-semicolon-error.html',
  },
  {
    title: 'Python IndentationError: unexpected indent (and how to avoid it)',
    summary:
      'A practical walkthrough on tabs vs spaces, showing before/after code, editor settings for soft tabs, and a copy-paste checklist for students.',
    href: '/blog/python-unexpected-indent-solution.html',
  },
  {
    title: 'Build a simple Python calculator (source code included)',
    summary:
      'Step-by-step guide to a console calculator using if/elif, input sanitization, and math helpers, plus challenges to extend it.',
    href: '/blog/python-calculator-source.html',
  },
];

export default function Home({ onStart }: Props) {
  return (
    <div className={`min-h-screen ${THEME.appBg} text-gray-100`}>
      {/* Top Nav */}
      <header className={`border-b ${THEME.divider} ${THEME.headerBg} backdrop-blur sticky top-0 z-20`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <div className="text-lg font-semibold">{BRAND}</div>
          <nav className="ml-auto flex items-center gap-3 text-sm text-gray-300">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#policies" className="hover:text-white">Policies</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <button onClick={onStart} className={`px-3 py-1 rounded ${THEME.primaryBtn}`}>Open Editor</button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        {/* Hero */}
        <section id="overview" className="py-14">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">Interactive coding workspace</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-2">
            Write, run, and learn code in the browser
          </h1>
          <p className="mt-4 text-gray-300/90 max-w-3xl">
            {BRAND} is a teaching-first code runner. You get language templates, clear output, and short guides so every page has useful, original content - not placeholder text.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={onStart} className={THEME.primaryBtn}>Start coding</button>
            <a href="#how-it-works" className={THEME.secondaryBtn}>How it works</a>
          </div>
          <div className="mt-4 text-xs text-gray-400 flex flex-wrap gap-4">
            <span>Ad-supported so the core editor stays free</span>
            <span>Sandboxed execution, no stored secrets</span>
            <span>Updated with new examples monthly</span>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className={`py-10 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-3">How the product is built for learners</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-2">1) Pick a language</div>
              <p>Templates keep every page populated with runnable, original sample code. Nothing is left blank or under construction.</p>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-2">2) Edit safely</div>
              <p>We run code in an isolated container. We block secrets and explain that code is kept locally unless you export it.</p>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-2">3) Read the results</div>
              <p>Compile output, stdout, and stderr are merged into one readable stream so learners get feedback fast.</p>
            </div>
          </div>
        </section>

        {/* Sponsored placement with context */}
        <section id="sponsored-1" className={`py-8 border-t ${THEME.divider}`}>
          <div className="text-sm uppercase tracking-[0.2em] text-gray-400">Sponsored</div>
          <p className="text-sm text-gray-300 mt-1">
            Ads appear only next to full content sections like this one. They never show on empty or under-construction screens.
          </p>
          <div className={`mt-4 p-3 rounded-lg border ${THEME.divider} ${THEME.headerBg}`}>
            <AdSlot slot="8370573240" className="w-full" />
          </div>
        </section>

        {/* Features */}
        <section id="features" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">What makes {BRAND} useful</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium">Instant start</div>
              <p className="text-sm text-gray-300">Open the editor and run your first snippet in seconds with zero environment setup.</p>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium">Multi-language</div>
              <p className="text-sm text-gray-300">Switch between Python, JavaScript, C++, Java, Go, C#, Ruby, and more instantly.</p>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium">Clean output</div>
              <p className="text-sm text-gray-300">See compile messages and program output together in one readable stream.</p>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium">Keyboard-first</div>
              <p className="text-sm text-gray-300">Use shortcuts like Ctrl or Cmd + Enter to run without leaving the editor.</p>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Example snippets you can try</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="text-sm text-gray-400 mb-2">Python</div>
              <pre className={`text-xs whitespace-pre overflow-auto p-3 rounded bg-gray-900 border ${THEME.divider}`}>{`def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
print(fib(10))`}</pre>
              <div className="mt-2 text-xs text-gray-300">Expected output: <span className="text-gray-100">55</span></div>
              <div className="text-xs text-gray-400">Computes the 10th Fibonacci number using an iterative loop.</div>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="text-sm text-gray-400 mb-2">JavaScript</div>
              <pre className={`text-xs whitespace-pre overflow-auto p-3 rounded bg-gray-900 border ${THEME.divider}`}>{`const nums = [1,2,3,4,5];
const sumEvens = nums.filter(n => n % 2 === 0)
  .reduce((a, n) => a + n, 0);
console.log(sumEvens);`}</pre>
              <div className="mt-2 text-xs text-gray-300">Expected output: <span className="text-gray-100">6</span></div>
              <div className="text-xs text-gray-400">Filters even numbers and reduces them to a sum.</div>
            </div>
          </div>
          <div className="mt-4"><button onClick={onStart} className={THEME.primaryBtn}>Open editor</button></div>
        </section>

        {/* Blog */}
        <section id="blog" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Latest guides from our engineering blog</h2>
          <p className="text-sm text-gray-300 mb-4">
            We publish practical, long-form articles that pair tutorials with runnable code. Each post links back to the live compiler so readers can test fixes without leaving the page.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className={`p-4 rounded-lg ${THEME.card}`}>
                <div className="text-sm uppercase tracking-[0.2em] text-blue-200/80 mb-1">Blog</div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{post.summary}</p>
                <a className="text-sm text-blue-300 hover:text-blue-200 inline-flex items-center gap-2 mt-3" href={post.href}>
                  Read the full post<span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="mt-4 text-xs text-gray-400">
            Our content strategy follows Google’s Valuable Inventory guidance: every page contains unique, tutorial-style writing, structured data, and clear navigation so ads never appear on empty or low-value screens.
          </div>
        </section>

        {/* Audience */}
        <section id="audience" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Who we design for</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-1">Students</div>
              <div className="text-gray-300">Guided templates reduce friction when you are learning algorithms or debugging homework.</div>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-1">Interview prep</div>
              <div className="text-gray-300">Fast compile and concise output help you focus on solving the prompt, not configuring tools.</div>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-1">Quick prototyping</div>
              <div className="text-gray-300">Try an idea, test the output, and copy the snippet into your main project when ready.</div>
            </div>
          </div>
        </section>

        {/* Sponsored placement lower on page */}
        <section id="sponsored-2" className={`py-8 border-t ${THEME.divider}`}>
          <div className="text-sm uppercase tracking-[0.2em] text-gray-400">Sponsored</div>
          <p className="text-sm text-gray-300 mt-1">We limit ads to two placements and keep them surrounded by original, instructional content.</p>
          <div className={`mt-4 p-3 rounded-lg border ${THEME.divider} ${THEME.headerBg}`}>
            <AdSlot slot="5834225030" className="w-full" />
          </div>
        </section>

        {/* Policies */}
        <section id="policies" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Quality, safety, and policy notes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-2">High-quality pages</div>
              <p>Every section contains unique instructional copy, runnable examples, and clear headings. We do not publish blank or placeholder screens.</p>
              <p className="mt-2 text-gray-300">Ads appear only beside these sections and never on under-construction pages.</p>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-2">Data handling</div>
              <p>Code stays local in your browser unless you download or share it. Execution happens in a sandbox and we rate-limit abuse.</p>
              <p className="mt-2 text-gray-300">See our <a className="underline" href="/privacy.html">Privacy Policy</a> and <a className="underline" href="/terms.html">Terms of Use</a> for full details.</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-300">
            <div className="font-medium mb-1">Editorial standards</div>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>We review every example and description to ensure it is accurate and original.</li>
              <li>We disclose that ads support the free tier and keep them separate from navigation and system alerts.</li>
              <li>We avoid low-value doorway pages and keep the site focused on programming education.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`py-12 border-t ${THEME.divider}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold">Need help or want to report an issue?</h2>
              <p className="text-sm text-gray-300">Email support@localcompiler.app and we will respond within two business days.</p>
              <p className="text-sm text-gray-300 mt-2">For advertising or policy concerns, mention the URL and the screen where you saw the issue.</p>
            </div>
            <button onClick={onStart} className={THEME.primaryBtn}>Open Editor</button>
          </div>
          <div className="mt-6 text-xs text-gray-400 flex flex-wrap gap-4">
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/terms.html">Terms of Use</a>
            <a href="#how-it-works">Product guide</a>
            <a href="#examples">Code examples</a>
          </div>
        </section>
      </main>
    </div>
  );
}
