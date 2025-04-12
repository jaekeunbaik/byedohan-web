/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Vite 기본 HTML 진입점
    './src/**/*.{js,ts,jsx,tsx}', // src 아래 모든 React 컴포넌트들
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
