/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkNavy: '#001634',
        deepBlue: '#1B3E82',
        skyTeal: '#2C8CA0',
        mintGreen: '#09E6C9',
      },
    },
  },
  plugins: [],
};
