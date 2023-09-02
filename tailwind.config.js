/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: "Helvetica Neue",
        HelveticaBold: "Helvetica Bold",
        HelveticaMedium: "Helvetica Medium",
      },
      colors: {
        black: "#000000",
        blue: "#0000ee",
        "blue-dark": "#35495e",
        "blue-light": "#415661",
        "green-light": "#00b53f",
        "green-dark": "#006304",
        "gray-dark": "#273444",
        gray: "#808080",
        "gray-light": "#d3dce6",
        yellow: "#fea03c",
        "yellow-light": "#ffaf45",
        white: "#ffffff",
        whitesmoke: "#ebf2f7",
        text: "#464b4f",
      },
    },
  },
  plugins: [require("daisyui")],
});
