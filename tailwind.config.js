/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        green: {
          200: 'hsl(148, 38%, 91%)', // Lighter green
          600: 'hsl(169, 82%, 27%)', // Medium green
        },
        red: 'hsl(0, 66%, 54%)', // Red
        white: 'hsl(0, 0%, 100%)', // White
        gray: {
          500: 'hsl(186, 15%, 59%)', // Medium gray
          900: 'hsl(187, 24%, 22%)', // Darker gray
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

