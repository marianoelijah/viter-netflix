const colors = [
  "accent",
  "light",
  "dark",
  "orange",
  "primary",
  "secondary",
  "line",
  "alert",
  "success",
  "warning",
  "info",
  "body",
];

const colorObject = colors.reduce((acc, color) => {
  acc[color] = `rgba(var(--${color}), <alpha-value>)`;
  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: colorObject,
      backgroundColor: colorObject,
      borderColor: colorObject,
      stroke: colorObject,
      fill: colorObject,
      colors: {
        primary: "#0D1017",
        secondary: "#DF0B17",
      },
    },
  },
  plugins: [],
};



