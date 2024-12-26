/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      colors: {
        bgColor: "#2c3542",
        calendarBgColor: "#1e242d",
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    }, // Add this closing brace
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
