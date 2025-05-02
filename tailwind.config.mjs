// tailwind.config.mjs
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#f97316',
        },
        navy: {
          500: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
});
