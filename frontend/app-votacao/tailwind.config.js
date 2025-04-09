/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
};
