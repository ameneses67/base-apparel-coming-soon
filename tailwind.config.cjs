/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0deg, 36%, 70%)",
        softRed: "hsl(0deg, 93%, 68%)",
        grayishRed: "hsl(0deg, 6%, 24%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
