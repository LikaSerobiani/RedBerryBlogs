/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D37F3",
        white: "#FFFFFF",
        black: "#1A1A1F",
        success: "#14D81C",
        error: "#EA1919",
        "light-grey": "#85858D",
        "dark-grey": "#404049",
        "lightest-grey": "#F4F3FF",
      },
    },
  },
  plugins: [],
};
