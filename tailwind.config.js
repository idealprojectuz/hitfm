/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1200px",
          // "2xl": "1536px",
        },
        padding: 10,
        center: true,
      },
    },
  },
  plugins: [],
};
