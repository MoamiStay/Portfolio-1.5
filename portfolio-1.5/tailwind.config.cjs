/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
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
        light_text: "#6B222F",
        dark_text: "#F2F2F2",
        light_text_bg: "#FFE8EC",
        dark_text_bg: "#393949",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
