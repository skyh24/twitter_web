/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#1DA1F2',
          500: '#1A91DA',
          600: '#1681BF',
        },
      },
    },
  },
  plugins: [],
}