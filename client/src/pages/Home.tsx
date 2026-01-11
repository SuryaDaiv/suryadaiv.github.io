import { Link } from 'react-router-dom';
import { BRAND, THEME } from '../config';
import SEOHead from '../components/SEOHead';

export default function Home() {
    return (
        <>
            <SEOHead
                title="Instant Online Compiler"
                description={`Run code instantly in your browser with ${BRAND}. Support for Python, JavaScript, C++, Java, and more.`}
            />
            <div>
                {/* Hero */}
                <section id="hero" className="py-14 mx-auto max-w-6xl px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Write, run, and share code without setup</h1>
                    <p className="mt-4 text-gray-300/90 max-w-2xl">A fast, browser-based editor for students, interview prep, and everyday prototypes — no installs, just results.</p>
                    <div className="mt-7 flex gap-3">
                        <Link to="/editor" className={THEME.primaryBtn}>Try in browser</Link>
                        <a href="#demo_block" className={THEME.secondaryBtn}>View examples</a>
                    </div>
                </section>

                {/* Badges */}
                <section id="badges" className={`py-6 border-t ${THEME.divider}`}>
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="sr-only">Trusted by</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">Trusted by learners and teams • Classroom-friendly • Zero-setup</div>
                    </div>
                </section>

                {/* Value Props */}
                <section id="value_props" className={`py-12 border-t ${THEME.divider}`}>
                    <div className="mx-auto max-w-6xl px-4">
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
                    </div>
                </section>

                {/* Demo Block */}
                <section id="demo_block" className={`py-12 border-t ${THEME.divider}`}>
                    <div className="mx-auto max-w-6xl px-4">
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
                        <div className="mt-4"><Link to="/editor" className={THEME.primaryBtn}>Open editor</Link></div>
                    </div>
                </section>

                {/* Use Cases */}
                <section id="use_cases" className={`py-12 border-t ${THEME.divider}`}>
                    <div className="mx-auto max-w-6xl px-4">
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
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className={`py-12 border-t ${THEME.divider}`}>
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="text-xl font-semibold mb-4">What users say</h2>
                        <ul className="grid md:grid-cols-3 gap-4 text-sm">
                            <li className={`p-4 rounded-lg ${THEME.card}`}>“Boots in a second and just runs. Perfect for class.” — CS Instructor</li>
                            <li className={`p-4 rounded-lg ${THEME.card}`}>“We demo algorithms in reviews without setup.” — Senior Engineer</li>
                            <li className={`p-4 rounded-lg ${THEME.card}`}>“Combined output makes debugging snappy on calls.” — Tutor</li>
                        </ul>
                    </div>
                </section>

                {/* Comparison */}
                <section id="comparison" className={`py-12 border-t ${THEME.divider}`}>
                    <div className="mx-auto max-w-6xl px-4">
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
                                        ['In-browser speed', 'Instant start', 'Fast', 'Fast'],
                                        ['Language coverage', '9 popular languages', 'Several languages', 'Many languages'],
                                        ['Offline mode', 'Planned', 'No', 'No'],
                                        ['Collaboration', 'Pro tier', 'Limited', 'Limited'],
                                        ['Exporting', 'Copy, download', 'Copy', 'Copy, share'],
                                        ['Cost', 'Free + Pro', 'Free', 'Free + Plans'],
                                        ['Learning aids', 'Examples, hints', 'Tutorials', 'Examples'],
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

                        <div className="mt-12 flex flex-col md:flex-row items-center gap-4 bg-slate-900/50 p-6 rounded border border-white/5">
                            <div>
                                <h2 className="text-xl font-semibold">Ready to start?</h2>
                                <p className="text-sm text-gray-300">No account required. Just click and code.</p>
                            </div>
                            <Link to="/editor" className={THEME.primaryBtn}>Open Editor</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
