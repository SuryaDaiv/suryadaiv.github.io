import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Play, Save, RotateCcw, Upload, FileCode, Moon, SunMedium, ArrowRight } from 'lucide-react';
import Editor from '../components/Editor';
import { Button } from '../components/ui/Button';
import AdSlot from '../components/ui/AdSlot';
import { LANGUAGE_OPTIONS, LANGUAGE_IDS, MONACO_LANG_BY_KEY } from '../lib/languageMap';
import { TEMPLATES } from '../lib/templates';
import type { LanguageKey, RunResponse } from '../types';
import SEO from '../components/SEO';

const API = axios.create({
  baseURL: 'https://suryadaiv-github-io.onrender.com',
});

export default function Compiler() {
  const [lang, setLang] = useState<LanguageKey>('python');
  const [theme, setTheme] = useState<'light' | 'vs-dark'>('vs-dark');
  const [code, setCode] = useState('');
  const [stdin, setStdin] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RunResponse | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`code:${lang}`);
    setCode(saved ?? TEMPLATES[lang] ?? '');
  }, [lang]);

  const monacoLanguage = useMemo(() => MONACO_LANG_BY_KEY[lang], [lang]);

  const runCode = useCallback(async () => {
    setLoading(true);
    setResult(null);
    try {
      const { data } = await API.post<RunResponse>('/api/run', {
        language: lang,
        languageId: LANGUAGE_IDS[lang],
        source: code,
        stdin,
      });
      setResult(data);
    } catch (e: any) {
      setResult({
        stdout: '',
        stderr: '',
        compile_output: e?.response?.data?.error || e.message || 'Failed',
        status: { id: -1, description: 'Client Error' },
        time: null,
        memory: null,
      });
    } finally {
      setLoading(false);
    }
  }, [code, stdin, lang]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'enter') {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [runCode]);

  const saveLocal = useCallback(() => {
    localStorage.setItem(`code:${lang}`, code);
  }, [lang, code]);

  const loadTemplate = useCallback(() => {
    setCode(TEMPLATES[lang] ?? '');
  }, [lang]);

  const onUpload = useCallback((file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCode(String(reader.result ?? ''));
    reader.readAsText(file);
  }, []);

  const outputText = useMemo(() => {
    if (!result) return loading ? 'Waiting for result...' : 'Run to see output';
    const parts: string[] = [];
    if (result.compile_output && result.compile_output.trim()) parts.push(result.compile_output.trim());
    if (result.stdout && result.stdout.trim()) parts.push(result.stdout.trim());
    if (result.stderr && result.stderr.trim()) parts.push(result.stderr.trim());
    return parts.join('\n');
  }, [result, loading]);

  return (
    <div className="pb-12">
      <SEO
        title="Online Compiler - Run Code Online"
        description="Write and run code in Python, JavaScript, C++, Java, and more. No installation required. Sandboxed execution with templates."
      />

      <section className="mt-8 mb-6">
        <p className="text-xs uppercase tracking-[0.18em] text-blue-700 font-semibold mb-2">Online Compiler</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)]">Online {lang.toUpperCase()} Compiler</h1>
        <p className="text-lg text-slate-600 mt-3 max-w-3xl">
          Write, run, and share code in the browser. Choose a language, use starter templates, and get instant feedback. Perfect for quick tests, learning, and sharing snippets.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm text-slate-600">
          {['Fast startup, no installation.', 'Shareable links to your code.', 'Works on desktop and mobile.'].map((t) => (
            <div key={t} className="flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between bg-white border border-[var(--color-border)] rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Language</span>
            <select
              className="h-10 rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              value={lang}
              onChange={(e) => setLang(e.target.value as LanguageKey)}
            >
              {LANGUAGE_OPTIONS.map((o) => (
                <option key={o.key} value={o.key}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="hidden h-8 w-px bg-[var(--color-border)] lg:block" />
          <Button onClick={runCode} disabled={loading} className="gap-2 rounded-xl">
            <Play size={16} />
            {loading ? 'Running...' : 'Run Code'}
          </Button>
          <Button variant="ghost" size="sm" onClick={saveLocal} title="Save to Local Storage" className="rounded-xl">
            <Save size={18} />
          </Button>
          <Button variant="ghost" size="sm" onClick={loadTemplate} title="Reset Code" className="rounded-xl">
            <RotateCcw size={18} />
          </Button>
          <label className="cursor-pointer">
            <Button variant="ghost" size="sm" as="span" title="Upload File" className="rounded-xl">
              <Upload size={18} />
            </Button>
            <input
              type="file"
              className="hidden"
              onChange={(e) => onUpload(e.target.files?.[0])}
            />
          </label>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'vs-dark' ? 'light' : 'vs-dark')}
            className="rounded-xl"
            aria-label="Toggle editor theme"
          >
            {theme === 'vs-dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </Button>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-[var(--color-ink)]">Tip:</span> Ctrl/Cmd + Enter to run
        </div>
      </div>

      <div className="mt-4 grid lg:grid-cols-[3fr_1fr] gap-4">
        <div className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)] min-h-[520px]">
            <div className="min-h-[260px]">
              <Editor language={monacoLanguage} theme={theme} value={code} onChange={setCode} />
            </div>
            <div className="bg-[#0f172a] text-white flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <span className="font-semibold text-sm">Output</span>
                {result && (
                  <span className="text-xs text-slate-400">
                    {result.time ? `${result.time}s` : ''}
                    {result.memory ? ` | ${result.memory} KB` : ''}
                  </span>
                )}
              </div>
              <pre className="flex-1 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap text-slate-200">
                {outputText}
              </pre>
              <div className="border-t border-slate-800 bg-[#0b1222] p-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">STDIN (input)</div>
                <textarea
                  className="w-full h-24 bg-[#0f172a] border border-slate-800 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-[var(--color-primary)] resize-none"
                  value={stdin}
                  onChange={(e) => setStdin(e.target.value)}
                  placeholder="Input for your program..."
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-[var(--color-border)] bg-slate-50">
            <AdSlot position="compiler_below_editor" />
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white border border-[var(--color-border)] rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] mb-3">
              <FileCode size={16} /> Quick Examples
            </div>
            <div className="space-y-2">
              {['Hello World', 'Variables', 'If...Else', 'Loops', 'Functions', 'Arrays'].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center justify-between group"
                  onClick={() => setCode(`# Example: ${item}\nprint("This is a demo for ${item}")`)}
                >
                  {item}
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary)]" />
                </button>
              ))}
            </div>
          </div>

          <AdSlot position="compiler_sidebar" height={250} />
        </aside>
      </div>
    </div>
  );
}
