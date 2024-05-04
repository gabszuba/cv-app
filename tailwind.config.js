/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: '#59544B',
      purple: '#aca7cf',
      green: '#d1de77',
      blue: {
        light: '#ccddee', dark: '#37716c',
      },
      beige: '#fffbf6',
    },
    extend: {},
  },
  plugins: [],
};
