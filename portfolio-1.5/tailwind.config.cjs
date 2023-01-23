/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/main.js"],
  mode: "jit",
  purge: ["./index.html"],
  darkMode: "media",
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1449px",
    },
    extend: {
      colors: {
        bg_light: "#F8CCD4",
        bg_dark: "#2C2C34",
        light_secondary: "#8FDFD1",
        dark_secondary: "#6A68DE",
        dark_text: "#6B222F",
        light_text: "#F2F2F2",
        light_text_bg: "#FFE8EC",
        dark_text_bg: "#393949",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
