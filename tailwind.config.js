const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#4169e1'
            },
            fontFamily: {
                sans: ['Roboto'],
                header: ['Allura']
            },
            fontSize: {
                '7xl': '7rem'
            }
        }
    }
}