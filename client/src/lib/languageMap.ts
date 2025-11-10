import type { LanguageKey } from '../types';

export const LANGUAGE_IDS: Record<LanguageKey, number> = {
  c: 50,      // C (GCC)
  cpp: 54,    // C++ (G++)
  csharp: 51, // C# (Mono)
  java: 62,   // Java (OpenJDK)
  node: 63,   // JavaScript (Node.js)
  typescript: 74,
  python: 71, // Python 3
  go: 60,
  ruby: 72,
};

export const LANGUAGE_LABELS: Record<LanguageKey, string> = {
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  java: 'Java',
  node: 'JavaScript (Node)',
  typescript: 'TypeScript',
  python: 'Python',
  go: 'Go',
  ruby: 'Ruby',
};

export const MONACO_LANG_BY_KEY: Record<LanguageKey, string> = {
  c: 'c',
  cpp: 'cpp',
  csharp: 'csharp',
  java: 'java',
  node: 'javascript',
  typescript: 'typescript',
  python: 'python',
  go: 'go',
  ruby: 'ruby',
};

export function normalizeLanguageSelection(input: string): LanguageKey | undefined {
  const key = input.toLowerCase();
  const map: Record<string, LanguageKey> = {
    c: 'c',
    'c++': 'cpp',
    cpp: 'cpp',
    csharp: 'csharp',
    'c#': 'csharp',
    java: 'java',
    javascript: 'node',
    node: 'node',
    typescript: 'typescript',
    ts: 'typescript',
    python: 'python',
    py: 'python',
    go: 'go',
    golang: 'go',
    ruby: 'ruby',
    rb: 'ruby',
  };
  return map[key];
}

export const LANGUAGE_OPTIONS: { key: LanguageKey; label: string }[] = (
  Object.keys(LANGUAGE_LABELS) as LanguageKey[]
).map((k) => ({ key: k, label: LANGUAGE_LABELS[k] }));

