/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blakish': '#231F20',
      },
      fontFamily: {
        cursive: ['Pacifico', 'cursive'], // You can add more fallback fonts if needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

