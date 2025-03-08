/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB662B',
        textColor: '#6B6B75',
        secondary: "#FEEAE1",
        dark: "#121723"
      },
    }

  },
  plugins: [],
}

