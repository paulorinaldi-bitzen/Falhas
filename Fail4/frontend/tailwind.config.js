/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          card: '#14141a',
          border: '#1f1f2e',
          text: '#e4e4e7',
          muted: '#a1a1aa',
          input: '#1a1a24',
        },
        light: {
          bg: '#f8f9fa',
          card: '#ffffff',
          border: '#e5e7eb',
          text: '#18181b',
          muted: '#71717a',
          input: '#ffffff',
        },
        primary: {
          DEFAULT: '#39a5b8',
          hover: '#2d8a9a',
          light: '#5bc5d8',
        },
        accent: '#2d7a8a',
      },
    },
  },
  plugins: [],
}
