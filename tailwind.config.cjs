/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : ['inter', 'sans-serif'],
    },

    colors: {
      'gray-100': '#9d9d9e',
      'gray-300': '#1e1d21',
      'gray-600': '#121214',

      'pink-500': '#e01fba',
      'pink-800': '#7a0f65',

      'white' : '#FFFFFF',


    },
    extend: {
      
    },
  },
  plugins: [],
}