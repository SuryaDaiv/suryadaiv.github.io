"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJudge0Client = createJudge0Client;
exports.submitAndWait = submitAndWait;
const axios_1 = __importDefault(require("axios"));
function createJudge0Client(baseURL, apiKey) {
    const url = (baseURL && baseURL.trim()) || 'https://ce.judge0.com';
    const headers = {};
    if (apiKey && apiKey.trim()) {
        headers['X-Api-Key'] = apiKey.trim();
        headers['X-RapidAPI-Key'] = apiKey.trim();
    }
    return axios_1.default.create({ baseURL: url, headers });
}
function isTerminalStatus(id) {
    // Judge0 terminal when status.id > 2 (3+)
    return id > 2;
}
function normalizeText(s) {
    if (s == null)
        return '';
    const str = String(s);
    // remove trailing null bytes which sometimes appear
    return str.replace(/\u0000+$/g, '');
}
async function submitAndWait(client, payload, opts = {}) {
    const pollInterval = opts.pollIntervalMs ?? 500;
    const timeoutMs = opts.timeoutMs ?? 30000;
    const params = {
        base64_encoded: false,
        wait: false,
    };
    const create = await client.post('/submissions', payload, { params });
    const token = create.data.token;
    const started = Date.now();
    // Poll until terminal
    // Request non-base64 as well
    // Ask for standard fields
    while (true) {
        const resp = await client.get(`/submissions/${token}`, {
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
