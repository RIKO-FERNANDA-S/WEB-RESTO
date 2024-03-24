/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#8BC271',
        'tinary': '#a9eb8a',
        'primary' : '#A0522D',
        'bg-primary': '#F3B664',
        'bg-secodary':  '#F1EECC',
        'bg-tinary': '#F9F6D1',
        'color-box': '#F0EAEA',
        'color-border-img': '#C0BC8E',
      },
    },
    fontFamily: {
      'K2D': ['K2D, sans-serif'],
      'josefin': ['Josefin Slab, serif'],
      'inria': ['Inria Sans, sans-serif']
    },
    shadow: {

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

