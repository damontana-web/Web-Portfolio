// tailwind.config.mjs
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: 'class',
  content: ['src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'], // ensure Tailwind scans your files
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eaf6fc',
          100: '#d0eafd',
          200: '#a8dbf9',
          300: '#7fc9f4',
          400: '#55b7ef',
          500: '#28ABE3',
          600: '#1d86c1',
          700: '#176396',
          800: '#12416b',
          900: '#0a2742',
        },
        navy: {
          500: '#2A3A8F',
        },
      },
    },
  },
  plugins: [],
})
