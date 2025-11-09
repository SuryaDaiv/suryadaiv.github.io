import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { createJudge0Client, submitAndWait } from './judge0';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(express.json({ limit: '256kb' }));

// CORS for Vite dev server
const viteOrigin = process.env.VITE_ORIGIN || 'http://localhost:5173';
app.use(
  cors({
    origin: [viteOrigin],
  })
);

// Basic rate limit 30 req/min/IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

type LanguageKey =
  | 'c'
  | 'cpp'
  | 'csharp'
  | 'java'
  | 'node'
  | 'typescript'
  | 'python'
  | 'go'
  | 'ruby';

const LANGUAGE_IDS: Record<LanguageKey, number> = {
  c: 50, // C (GCC)
  cpp: 54, // C++ (G++)
  csharp: 51, // C# (Mono)
  java: 62, // Java (OpenJDK)
  node: 63, // JavaScript (Node.js)
  typescript: 74,
  python: 71, // Python 3
  go: 60,
  ruby: 72,
};

function resolveLanguageId(input: string | number): number | null {
  if (typeof input === 'number' && Number.isFinite(input)) return input;
  const key = String(input).toLowerCase().trim();
  // accept a few friendly names
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
  const langKey = map[key];
  if (!langKey) return null;
  return LANGUAGE_IDS[langKey];
}

interface RunBody {
  language?: string; // friendly name from dropdown
  languageId?: number; // optional direct id
  source: string;
  stdin?: string;
  // compileOptions may be provided by client but is unused; tolerate it
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compileOptions?: any;
}

app.post('/api/run', async (req, res) => {
  try {
    const body = req.body as RunBody;
    if (!body || typeof body.source !== 'string') {
      return res.status(400).json({ error: 'Invalid payload: missing source' });
    }
    const langId =
      typeof body.languageId === 'number'
        ? body.languageId
        : body.language
        ? resolveLanguageId(body.language)
        : null;
    if (!langId) {
      return res.status(400).json({ error: 'Invalid or missing language' });
    }

    const client = createJudge0Client(
      process.env.JUDGE0_BASE_URL,
      process.env.JUDGE0_API_KEY
    );

    const result = await submitAndWait(
      client,
      {
        language_id: langId,
        source_code: body.source,
        stdin: body.stdin ?? '',
      },
      { pollIntervalMs: 500, timeoutMs: 60_000 }
    );

    return res.json({
      stdout: result.stdout ?? '',
      stderr: result.stderr ?? '',
      compile_output: result.compile_output ?? '',
      status: result.status,
      time: result.time ?? null,
      memory: result.memory ?? null,
    });
  } catch (err: any) {
    const code = err?.response?.status ?? 500;
    const msg = err?.response?.data ?? err?.message ?? 'Unknown error';
    return res.status(code).json({ error: 'Execution failed', detail: msg });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
