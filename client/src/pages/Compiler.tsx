import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Play, Save, RotateCcw, Upload, FileCode, ChevronRight } from 'lucide-react';
import Editor from '../components/Editor';
import { Button } from '../components/ui/Button';
import AdSlot from '../components/ui/AdSlot';
import { LANGUAGE_OPTIONS, LANGUAGE_IDS, MONACO_LANG_BY_KEY } from '../lib/languageMap';
import { TEMPLATES } from '../lib/templates';
import type { LanguageKey, RunResponse } from '../types';
import { BRAND } from '../config';
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

    // Load code from localStorage per language or default to template
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
        <div className="flex flex-col h-[calc(100vh-64px)]">
            <SEO
                title="Online Compiler - Run Code Online"
                description="Write and run code in Python, JavaScript, C++, Java, and more. No installation required."
            />
            {/* Toolbar */}
            <div className="flex items-center justify-between p-2 border-b border-border bg-white">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">Language:</span>
                        <select
                            className="h-9 rounded-md border border-border bg-white px-3 py-1 text-sm focus:border-primary focus:outline-none"
                            value={lang}
                            onChange={(e) => setLang(e.target.value as LanguageKey)}
                        >
                            {LANGUAGE_OPTIONS.map((o) => (
                                <option key={o.key} value={o.key}>{o.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="h-6 w-px bg-gray-200"></div>

                    <Button
                        onClick={runCode}
                        disabled={loading}
                        className="gap-2"
                    >
                        <Play size={16} />
                        {loading ? 'Running...' : 'Run Code'}
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={saveLocal} title="Save to Local Storage">
                        <Save size={18} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={loadTemplate} title="Reset Code">
                        <RotateCcw size={18} />
                    </Button>
                    <label className="cursor-pointer">
                        <Button variant="ghost" size="sm" as="span" title="Upload File">
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
                    >
                        {theme === 'vs-dark' ? '☀️' : '🌙'}
                    </Button>
                </div>
            </div>

            <div className="flex flex-1 min-h-0">
                {/* Main Editor Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex-1 flex">
                        {/* Editor */}
                        <div className="w-1/2 border-r border-border relative">
                            <Editor
                                language={monacoLanguage}
                                theme={theme}
                                value={code}
                                onChange={setCode}
                            />
                        </div>

                        {/* Output */}
                        <div className="w-1/2 flex flex-col bg-[#1e1e1e] text-white">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 bg-[#252526]">
                                <span className="font-medium text-sm">Output</span>
                                {result && (
                                    <span className="text-xs text-gray-400">
                                        {result.time ? `${result.time}s` : ''}
                                        {result.memory ? ` | ${result.memory} KB` : ''}
                                    </span>
                                )}
                            </div>
                            <pre className="flex-1 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap text-gray-300">
                                {outputText}
                            </pre>

                            {/* STDIN */}
                            <div className="border-t border-gray-700 bg-[#252526] p-2">
                                <div className="text-xs text-gray-400 mb-1">STDIN (Input)</div>
                                <textarea
                                    className="w-full h-20 bg-[#1e1e1e] border border-gray-700 rounded p-2 text-sm text-white focus:outline-none focus:border-primary resize-none"
                                    value={stdin}
                                    onChange={(e) => setStdin(e.target.value)}
                                    placeholder="Input for your program..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Examples */}
                <div className="w-64 border-l border-border bg-gray-50 flex flex-col hidden lg:flex">
                    <div className="p-4 border-b border-border">
                        <h3 className="font-semibold text-secondary flex items-center gap-2">
                            <FileCode size={18} /> Examples
                        </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        <p className="text-xs text-gray-500 mb-2">Quick start examples:</p>
                        {['Hello World', 'Variables', 'If...Else', 'Loops', 'Functions', 'Arrays'].map((item) => (
                            <button
                                key={item}
                                className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm transition-all flex items-center justify-between group"
                                onClick={() => {
                                    // In a real app, this would load the example code
                                    setCode(`# Example: ${item}\nprint("This is a demo for ${item}")`);
                                }}
                            >
                                {item}
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}

                        <div className="mt-8">
                            <AdSlot position="compiler_sidebar" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
