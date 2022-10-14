/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#091221',
        'bgtaskcolor': '#050b14',
        'textcolor': '#FF0080',



      },
    },
  },
  plugins: [],
}