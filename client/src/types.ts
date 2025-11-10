export type LanguageKey =
  | 'c'
  | 'cpp'
  | 'csharp'
  | 'java'
  | 'node'
  | 'typescript'
  | 'python'
  | 'go'
  | 'ruby';

export interface RunRequestBody {
  language?: string;
  languageId?: number;
  source: string;
  stdin?: string;
}

export interface RunResponse {
  stdout: string;
  stderr: string;
  compile_output: string;
  status: { id: number; description: string };
  time: string | null;
  memory: number | null;
}

