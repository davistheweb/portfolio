/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clash: ["Clash Display Medium", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        green: "#34afcb",
      },
      backgroundColor: {
        green: "#34afcb",
      },
    },
  },
  plugins: [],
};
