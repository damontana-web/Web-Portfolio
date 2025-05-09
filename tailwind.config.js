// tailwind.config.js
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './node_modules/preline/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: { 
          500: '#2A3A8F',  // Your primary brand color
          400: '#28ABE3',  // Your secondary brand color
          600: '#1E2A6B',  // Darker shade of primary for hover states
        },
        navy: { 500: '#1e3a8a' },
      },
    },
  },
  plugins: [forms],
};
