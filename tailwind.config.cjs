/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#1e1e20',
      },
      fontFamily: {
        'dmsans': 'DM Sans',
        'jost': 'Jost'
      },
      backgroundImage: {
        'film-bg': 'url(/src/films.jpg)'
      },
      width: {
        '100': '28rem'
      }
    },
  },
  plugins: [],
}
