import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Home from './components/Home';
import { LANGUAGE_OPTIONS, LANGUAGE_IDS, MONACO_LANG_BY_KEY } from './lib/languageMap';
import { TEMPLATES } from './lib/templates';
import type { LanguageKey, RunResponse } from './types';
import './index.css';
import { BRAND, THEME } from './config';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export default function App() {
  const [view, setView] = useState<'home' | 'editor'>('home');
  const [lang, setLang] = useState<LanguageKey>('node');
  const [theme, setTheme] = useState<'light' | 'vs-dark'>('vs-dark');
  const [code, setCode] = useState('');
  const [stdin, setStdin] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RunResponse | null>(null);

  // Load code from localStorage per language or default to template
  useEffect(() => {
    const saved = localStorage.getItem(`code:${lang}`);
    setCode(saved ?? TEMPLATES[lang]);
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

  // Keyboard shortcut: Ctrl/Cmd + Enter
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
    setCode(TEMPLATES[lang]);
  }, [lang]);

  const onUpload = useCallback((file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCode(String(reader.result ?? ''));
    reader.readAsText(file);
  }, []);

  const outputText = useMemo(() => {
    if (!result) return loading ? 'Waiting for result…' : 'Run to see output';
    const parts: string[] = [];
    if (result.compile_output && result.compile_output.trim()) parts.push(result.compile_output.trim());
    if (result.stdout && result.stdout.trim()) parts.push(result.stdout.trim());
    if (result.stderr && result.stderr.trim()) parts.push(result.stderr.trim());
    return parts.join('\n');
  }, [result, loading]);

  if (view === 'home') {
    return <Home onStart={() => setView('editor')} />;
  }

  return (
    <div className={`h-screen flex flex-col ${THEME.appBg}`}>
      {/* Top Bar */}
      <div className={`flex items-center gap-3 p-3 ${THEME.headerBg} border-b ${THEME.divider}`}>
        <div className="text-lg font-semibold">{BRAND}</div>
        <button onClick={() => setView('home')} className={`ml-2 px-3 py-1 rounded ${THEME.controlBg}`}>Home</button>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300">Language</label>
          <select
            className={THEME.select}
            value={lang}
            onChange={(e) => setLang(e.target.value as LanguageKey)}
          >
            {LANGUAGE_OPTIONS.map((o) => (
              <option key={o.key} value={o.key}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="ml-2">
          <button
            className={`px-2 py-1 rounded ${THEME.controlBg}`}
            onClick={() => setTheme(theme === 'vs-dark' ? 'light' : 'vs-dark')}
          >
            {theme === 'vs-dark' ? 'Light' : 'Dark'} Theme
          </button>
        </div>

        <div className="ml-2">
          <button
            className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded"
            onClick={runCode}
            disabled={loading}
          >
            {loading ? 'Running…' : 'Run'}
          </button>
        </div>

        <div className="ml-2">
          <button
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/15 border border-white/10"
            onClick={saveLocal}
          >
            Save
          </button>
        </div>

        <div className="ml-2">
          <button
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/15 border border-white/10"
            onClick={loadTemplate}
          >
            Reset
          </button>
        </div>

        <div className="ml-2">
          <label className={`px-3 py-1 rounded ${THEME.controlBg} cursor-pointer`}>
            Import file
            <input
              type="file"
              className="hidden"
              onChange={(e) => onUpload(e.target.files?.[0])}
            />
          </label>
        </div>

        <div className="ml-auto text-sm text-gray-400">
          Ctrl/Cmd + Enter to run
        </div>
      </div>

      {/* Middle: Editor + Results */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Editor */}
        <div id="editor" className={`w-1/2 border-r ${THEME.divider} min-h-0 overflow-hidden`}>
          <Editor
            language={monacoLanguage}
            theme={theme}
            value={code}
            onChange={setCode}
          />
        </div>

        {/* Right: Output */}
        <div className="w-1/2 flex flex-col min-h-0">
          <div className={`flex items-center p-2 border-b ${THEME.divider} ${THEME.paneBg}`}>
            <div className="font-medium">Output</div>
            <div className="ml-auto text-sm text-gray-400">
              {result && (
                <span>
                  {result.time ? `Time: ${result.time}s` : ''}
                  {result.time && result.memory ? ' · ' : ''}
                  {result.memory ? `Mem: ${result.memory} KB` : ''}
                </span>
              )}
            </div>
          </div>
          <pre className={`flex-1 overflow-auto p-3 text-sm whitespace-pre-wrap ${THEME.preBg}`}>{outputText}</pre>
        </div>
      </div>

      {/* Bottom: STDIN */}
      <div className={`p-2 border-t ${THEME.divider} ${THEME.paneBg}`}>
        <div className="text-sm text-gray-300 mb-1">STDIN</div>
        <textarea
          className={`w-full h-24 p-2 rounded ${THEME.appBg} border ${THEME.divider}`}
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
          placeholder="Type input passed to your program here"
        />
      </div>
    </div>
  );
}
