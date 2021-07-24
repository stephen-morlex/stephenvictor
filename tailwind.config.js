
const { theme } = require('tailwindcss/defaultConfig')
module.exports = {
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      '1/5': '20%',
      colors: {
        primary: '#3E2CCF',
        secondary: '#FFF100',
        black: '#000000',
        gray: '#8C80B3'
      },
      fontFamily: {
        hero: ['Playfair Display'],
        sans: ['roboto'],
        header: ['Philosopher']
      },
      fontSize: {
        '7xl': '7rem'
      }
    }
  },
  variants: {
  },
  plugins: []
}
