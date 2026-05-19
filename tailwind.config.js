/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#12385b',
          700: '#0d2a44',
          800: '#091f33',
          900: '#061525',
        },
        gold: {
          400: '#d4a843',
          500: '#c9952e',
          600: '#b07d1a',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans Arabic"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
