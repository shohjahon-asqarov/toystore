/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'varela': ['Varela Round', 'sans-serif']
      },
      colors: {
        'green': '#A5C926',
        'gray': '#F8F8F8',
        'yellow': '#FFC12C',
        'pink': '#FB416B'
      },
      backgroundImage: {
        'hero': "url('/images/hero.jpg')"
      }
    },
  },
  plugins: [],
}