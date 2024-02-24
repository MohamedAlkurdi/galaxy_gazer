/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '85vh': '85vh',
        '60vh':'60vh',
        '60%':'60%',
      },
      minWidth: {
        '85vw': '85vw',
        '60vw':'60vw',
        '60%':'60%',
      },
    },
  },
  plugins: [],
}

