// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {},
  plugins: [],
};

export const theme = {
  minHeight: {
    "1/2": "50%",
  },
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  colors: {
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
};

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js",
];

export const darkMode = "class";
export const plugins = [require("tw-elements-react/dist/plugin.cjs")];
