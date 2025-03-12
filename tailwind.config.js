/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff5f1',
          100: '#ffe6dc',
          200: '#ffc8b3',
          300: '#ffa98a',
          400: '#ff8b61',
          500: '#ff6d38',
          600: '#ff4f0f',
          700: '#e63d00',
          800: '#b93100',
          900: '#8c2500',
        }
      }
    },
  },
  plugins: [],
};