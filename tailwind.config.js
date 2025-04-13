/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
