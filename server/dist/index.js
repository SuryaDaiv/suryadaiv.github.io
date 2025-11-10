"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const judge0_js_1 = require("./judge0.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.use(express_1.default.json({ limit: '256kb' }));
// CORS for Vite dev server
const viteOrigin = process.env.VITE_ORIGIN || 'http://localhost:5173';
app.use((0, cors_1.default)({
    origin: [viteOrigin],
}));
// Basic rate limit 30 req/min/IP
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    limit: 30,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
const LANGUAGE_IDS = {
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
function resolveLanguageId(input) {
    if (typeof input === 'number' && Number.isFinite(input))
        return input;
    const key = String(input).toLowerCase().trim();
    // accept a few friendly names
    const map = {
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
    if (!langKey)
        return null;
    return LANGUAGE_IDS[langKey];
}
app.post('/api/run', async (req, res) => {
    try {
        const body = req.body;
        if (!body || typeof body.source !== 'string') {
            return res.status(400).json({ error: 'Invalid payload: missing source' });
        }
        const langId = typeof body.languageId === 'number'
            ? body.languageId
            : body.language
                ? resolveLanguageId(body.language)
                : null;
        if (!langId) {
            return res.status(400).json({ error: 'Invalid or missing language' });
        }
        const client = (0, judge0_js_1.createJudge0Client)(process.env.JUDGE0_BASE_URL, process.env.JUDGE0_API_KEY);
        const result = await (0, judge0_js_1.submitAndWait)(client, {
            language_id: langId,
            source_code: body.source,
            stdin: body.stdin ?? '',
        }, { pollIntervalMs: 500, timeoutMs: 60000 });
        return res.json({
            stdout: result.stdout ?? '',
            stderr: result.stderr ?? '',
            compile_output: result.compile_output ?? '',
            status: result.status,
            time: result.time ?? null,
            memory: result.memory ?? null,
        });
    }
    catch (err) {
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
