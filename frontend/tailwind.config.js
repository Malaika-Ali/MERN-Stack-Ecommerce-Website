/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-color': '#010101',
        'white-color': '#f2fOea',
        'yellow-color': '#edcf5d',
        'grey-color': '#a4a4a4'
      },
      screens: {
        'xs': '480px',
        // => @media (min-width: 480px) { ... }
      }
    },
  },
  plugins: [],
}