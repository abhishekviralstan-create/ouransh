/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5ebe0",
        creamlight: "#faf3ea",
        gold: "#b5893a",
        golddark: "#9c7530",
        forest: "#1f2a1f",
        forestlight: "#28352a",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
