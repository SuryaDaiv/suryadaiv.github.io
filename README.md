Local Multi‑Language Online Compiler (Judge0 CE)

Prerequisites
- Node.js 18+

Setup
- Install deps: `npm install`
- Optional: copy env and edit: `cp server/.env.example server/.env`
  - You may set `JUDGE0_BASE_URL` and/or `JUDGE0_API_KEY`. Defaults to the free CE endpoint.
- Start both client and server: `npm run dev`
- Open the Vite client URL printed in the terminal (usually `http://localhost:5173`).

How to use
- Pick a language from the top bar.
- Edit code in the Monaco editor. Use “New from template” for a starter.
- Optionally upload a local file to load into the editor.
- Type any STDIN in the bottom textarea.
- Press Run (or Ctrl/Cmd+Enter). The right panel shows Output, Stderr, and Compile Log.
- Save button stores the current code for the selected language in localStorage.

Notes
- Uses the public Judge0 CE API at `https://ce.judge0.com`. Availability and rate limits may vary.
- Simple rate limiting (30 req/min/IP) and 256 KB request body limit are enabled on the backend.

Scripts
- `npm run dev` – runs server and client concurrently
- `npm run build` – builds client and server
- `npm start` – runs the built server (`server/dist/index.js`)

Project Layout
- `server/` – Express + TypeScript backend calling Judge0
- `client/` – React + Vite + TypeScript frontend with Monaco and Tailwind
# coderPalace
