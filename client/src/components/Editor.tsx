import { useEffect, useRef } from 'react';
import MonacoEditor, { OnMount } from '@monaco-editor/react';

type Props = {
  language: string;
  theme: 'light' | 'vs-dark';
  value: string;
  onChange: (v: string) => void;
};

export default function Editor({ language, theme, value, onChange }: Props) {
  const monacoRef = useRef<any>(null);

  const onMount: OnMount = (editor, monaco) => {
    monacoRef.current = { editor, monaco };
    editor.focus();
  };

  useEffect(() => {
    // layout on resize
    function onResize() {
      monacoRef.current?.editor?.layout();
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="monaco-container">
      <MonacoEditor
        height="100%"
        theme={theme}
        language={language}
        value={value}
        onChange={(v) => onChange(v ?? '')}
        onMount={onMount}
        options={{ fontSize: 14, minimap: { enabled: false } }}
      />
    </div>
  );
}

