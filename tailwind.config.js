/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D37F3",
        black: "#1A1A1F",
        success: "#14D81C",
        error: "#EA1919",
      },
    },
  },
  plugins: [],
};
