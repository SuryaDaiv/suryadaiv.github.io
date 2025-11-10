import React from 'react';
import { BRAND, THEME } from '../config';

type Props = {
  onStart: () => void;
};

export default function Home({ onStart }: Props) {
  return (
    <div className={`min-h-screen ${THEME.appBg} text-gray-100`}>
      {/* Top Nav */}
      <header className={`border-b ${THEME.divider} ${THEME.headerBg} backdrop-blur`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <div className="text-lg font-semibold">{BRAND}</div>
          <nav className="ml-auto flex items-center gap-2">
            <button onClick={onStart} className={`px-3 py-1 rounded ${THEME.primaryBtn}`}>Open Editor</button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section id="hero" className="py-14">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Write, run, and share code without setup</h1>
          <p className="mt-4 text-gray-300/90 max-w-2xl">A fast, browser-based editor for students, interview prep, and everyday prototypes — no installs, just results.</p>
          <div className="mt-7 flex gap-3">
            <button onClick={onStart} className={THEME.primaryBtn}>Try in browser</button>
            <a href="#demo_block" className={THEME.secondaryBtn}>View examples</a>
          </div>
        </section>

        {/* Badges */}
        <section id="badges" className={`py-6 border-t ${THEME.divider}`}>
          <h2 className="sr-only">Trusted by</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">Trusted by learners and teams • Classroom-friendly • Zero-setup</div>
        </section>

        {/* Value Props */}
        <section id="value_props" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Why developers choose {BRAND}</h2>
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

        {/* Demo Block */}
        <section id="demo_block" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Try it now</h2>
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

        {/* Use Cases */}
        <section id="use_cases" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">Where it fits best</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-1">Students</div>
              <div className="text-gray-300">Problem: Installs slow homework. Solution: Run in browser with templates. Outcome: Faster, fewer issues.</div>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-1">Interview prep</div>
              <div className="text-gray-300">Problem: Context switching. Solution: One tab with quick-run. Outcome: More reps, clearer feedback.</div>
            </div>
            <div className={`p-4 rounded-lg ${THEME.card}`}>
              <div className="font-medium mb-1">Quick prototyping</div>
              <div className="text-gray-300">Problem: Heavy setups for small ideas. Solution: Test snippets. Outcome: Decide faster.</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">What users say</h2>
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li className={`p-4 rounded-lg ${THEME.card}`}>“Boots in a second and just runs. Perfect for class.” — CS Instructor</li>
            <li className={`p-4 rounded-lg ${THEME.card}`}>“We demo algorithms in reviews without setup.” — Senior Engineer</li>
            <li className={`p-4 rounded-lg ${THEME.card}`}>“Combined output makes debugging snappy on calls.” — Tutor</li>
          </ul>
        </section>

        {/* Comparison */}
        <section id="comparison" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-4">How we compare</h2>
          <div className="overflow-auto">
            <table className={`w-full text-sm border ${THEME.divider}`}>
              <thead className="bg-white/5">
                <tr>
                  <th className="px-3 py-2 text-left">Feature</th>
                  <th className="px-3 py-2 text-left">{BRAND}</th>
                  <th className="px-3 py-2 text-left">Programiz</th>
                  <th className="px-3 py-2 text-left">JDoodle</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['In-browser speed','Instant start','Fast','Fast'],
                  ['Language coverage','9 popular languages','Several languages','Many languages'],
                  ['Offline mode','Planned','No','No'],
                  ['Collaboration','Pro tier','Limited','Limited'],
                  ['Exporting','Copy, download','Copy','Copy, share'],
                  ['Cost','Free + Pro','Free','Free + Plans'],
                  ['Learning aids','Examples, hints','Tutorials','Examples'],
                ].map((row) => (
                  <tr key={row[0]} className={`odd:bg-black/10 even:bg-white/5 border-t ${THEME.divider}`}>
                    <td className="px-3 py-2">{row[0]}</td>
                    <td className="px-3 py-2">{row[1]}</td>
                    <td className="px-3 py-2">{row[2]}</td>
                    <td className="px-3 py-2">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`py-12 border-t ${THEME.divider}`}>
          <h2 className="text-xl font-semibold mb-6">Frequently asked questions</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium">Which languages are supported?</dt>
              <dd className="text-gray-300">Python, JavaScript (Node), TypeScript, C, C++, C#, Java, Go, and Ruby.</dd>
            </div>
            <div>
              <dt className="font-medium">How fast does it run?</dt>
              <dd className="text-gray-300">Most snippets execute in under two seconds; heavy tasks may take longer.</dd>
            </div>
            <div>
              <dt className="font-medium">Do you store my code?</dt>
              <dd className="text-gray-300">Code stays in your browser by default. You can opt in to sync or export.</dd>
            </div>
            <div>
              <dt className="font-medium">Can I save and share snippets?</dt>
              <dd className="text-gray-300">Yes. Save locally and share exported files or generated links when enabled.</dd>
            </div>
            <div>
              <dt className="font-medium">Are there keyboard shortcuts?</dt>
              <dd className="text-gray-300">Use Ctrl or Cmd + Enter to run, plus common editor bindings.</dd>
            </div>
            <div>
              <dt className="font-medium">How is pricing structured?</dt>
              <dd className="text-gray-300">Core editor is free. Pro adds collaboration and exports for a simple monthly fee.</dd>
            </div>
          </dl>
        </section>

        {/* Footer CTA */}
        <section id="footer_cta" className={`py-12 border-t ${THEME.divider}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold">Start coding in seconds</h2>
              <p className="text-sm text-gray-300">Open the editor and run your first snippet now.</p>
            </div>
            <button onClick={onStart} className={THEME.primaryBtn}>Open Editor</button>
          </div>
          <div className="mt-6 text-xs text-gray-400 flex flex-wrap gap-4">
            <a href="/docs">Documentation</a>
            <a href="/pricing">Pricing</a>
            <a href="/privacy">Privacy</a>
            <a href="/changelog">Changelog</a>
            <a href="/shortcuts">Keyboard Shortcuts</a>
            <a href="/examples">Code Examples</a>
          </div>
        </section>
      </main>
    </div>
  );
}
