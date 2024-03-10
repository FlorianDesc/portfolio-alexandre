/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainC': '#27272A',
        'textC': '#71717a',
        'btn': '#2b2b2e',
        'cardI': '#2D2D31'
      },
      gridTemplateColumns:{
        'projet': '1fr 5fr'
      },
      gridTemplateRows:{
        'projet': 'repeat(4, 1fr)'
      }
    },
  },
  plugins: [],
}


