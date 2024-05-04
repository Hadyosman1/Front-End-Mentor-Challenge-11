/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      thin: "400",
      bold: "700",
    },
    extend: {
      colors: {
        introColor: "hsl(217, 28%, 15%)",
        mainBackground: "hsl(218, 28%, 13%)",
        footerBackground: "hsl(216, 53%, 9%)",
        testimonialsBackground: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Raleway: "Raleway",
        OpenSans: "Open sans",
      },
    },
  },
  plugins: [],
};
