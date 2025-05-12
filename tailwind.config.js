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
          500: '#1B91F2',  // Updated primary brand color
          400: '#1B91F2',  // Your secondary brand color
          600: '#2A3A8F',  // Darker shade of primary for hover states
        },
        navy: { 500: '#1e3a8a' },
      },
    },
  },
  plugins: [forms],
};
