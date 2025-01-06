/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./public/**/*.html",
    "./components/**/*.{vue,js,jsx}"
  ],
  theme: {
    extend: {
          fontFamily: {
            sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
          },
    },
  },
  plugins: [],
}

