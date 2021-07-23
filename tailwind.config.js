const { theme } = require("tailwindcss/defaultConfig");
module.exports = {
  darkMode: "class",
  theme: {
    darkSelector: ".dark-mode",
    extend: {
      colors: {
        primary: "#1142FF",
        secondary: "#FDF25C",
        third:'#83FBD5'
      },
      fontFamily: {
        hero:["Monoton"],
        sans: ["Varela"],
        header: ["Philosopher"]
      },
      fontSize: {
        "7xl": "7rem"
      }
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};