/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue
          hover: '#1d4ed8',
        },
        secondary: '#0F172A', // ink dark
        accent: '#22C55E', // green
        background: '#F8FAFC', // subtle off-white
        surface: '#FFFFFF',
        border: '#E2E8F0',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

