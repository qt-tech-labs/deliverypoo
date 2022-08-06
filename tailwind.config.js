const Globals = require('./Globals');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: Globals.COLOR.GREEN,
        secondary: Globals.COLOR.DARKGREEN
      }
    },
  },
  plugins: [],
}
