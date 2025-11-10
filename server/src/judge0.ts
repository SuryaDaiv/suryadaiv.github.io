import axios, { AxiosInstance } from 'axios';

export interface Judge0SubmissionReq {
  source_code: string;
  language_id: number;
  stdin?: string;
}

export interface Judge0SubmissionResp {
  token: string;
}

export interface Judge0Result {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  status: { id: number; description: string };
  time?: string | null;
  memory?: number | null;
}

export interface SubmitOptions {
  pollIntervalMs?: number;
  timeoutMs?: number;
}

export function createJudge0Client(baseURL?: string, apiKey?: string): AxiosInstance {
  const url = (baseURL && baseURL.trim()) || 'https://ce.judge0.com';
  const headers: Record<string, string> = {};
  if (apiKey && apiKey.trim()) {
    headers['X-Api-Key'] = apiKey.trim();
    headers['X-RapidAPI-Key'] = apiKey.trim();
  }
  return axios.create({ baseURL: url, headers });
}

function isTerminalStatus(id: number): boolean {
  // Judge0 terminal when status.id > 2 (3+)
  return id > 2;
}

function normalizeText(s: unknown): string {
  if (s == null) return '';
  const str = String(s);
  // remove trailing null bytes which sometimes appear
  return str.replace(/\u0000+$/g, '');
}

export async function submitAndWait(
  client: AxiosInstance,
  payload: Judge0SubmissionReq,
  opts: SubmitOptions = {}
): Promise<Judge0Result> {
  const pollInterval = opts.pollIntervalMs ?? 500;
  const timeoutMs = opts.timeoutMs ?? 30_000;

  const params = {
    base64_encoded: false,
    wait: false,
  } as const;

  const create = await client.post<Judge0SubmissionResp>(
    '/submissions',
    payload,
    { params }
  );
  const token = create.data.token;

  const started = Date.now();
  // Poll until terminal
  // Request non-base64 as well
  // Ask for standard fields
  while (true) {
    const resp = await client.get<Judge0Result>(`/submissions/${token}`, {
      params: { base64_encoded: false },
    });
    const r = resp.data;
    if (isTerminalStatus(r.status?.id ?? 0)) {
      return {
        ...r,
        stdout: normalizeText(r.stdout),
        stderr: normalizeText(r.stderr),
        compile_output: normalizeText(r.compile_output),
      };
    }
    if (Date.now() - started > timeoutMs) {
      return {
        ...r,
        stdout: normalizeText(r.stdout),
        stderr: normalizeText(r.stderr),
        compile_output: 'Polling timed out',
        status: { id: 5, description: 'Time Limit Exceeded (client timeout)' },
      };
    }
    await new Promise((res) => setTimeout(res, pollInterval));
  }
}

