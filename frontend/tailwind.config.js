/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'black-color': '#010101',
        'white-color': '#f2fOea',
        'yellow-color': '#edcf5d',
        'grey-color': '#a4a4a4',
        'light-bg-color': '#F3F3F3',

        'dark-sidebar-bg': '#141414',
        'dark-bg': '#333333',
        'light-gray': '#575757',
        'dark-gray': "#1D1D1D"
      },
      screens: {
        'xs': '480px',
        // => @media (min-width: 480px) { ... }
      },
      container: {
        // you can configure the container to be centered
        // center: true,

        // or have default horizontal padding
        // padding: '1rem',

        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },
    },
  },
  plugins: [],
}