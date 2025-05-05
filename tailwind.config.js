// tailwind.config.js
const forms = require('@tailwindcss/forms');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './node_modules/preline/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#f97316' },
        navy: { 500: '#1e3a8a' },
      },
    },
  },
  plugins: [forms],
};
