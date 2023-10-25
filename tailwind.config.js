/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        wineColor: "#5E2129",
        wineColorHover: "#4a1b20",
      },
      colors: {
        wineColor: "#5E2129",
        wineColorHover: "#4a1b20",
        textColor: "#450a0a",
        textColor2: "#f2b771",
      },
      animation: {
        slideDown: "slideDown 1s forwards",
      },
    },
  },
  plugins: [],
};
