/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0d1f33', // deep blue
        secondary: '#bfc0c0', // silver/grey
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive']
      }
    },
  },
  plugins: [],
}
