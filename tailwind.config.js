/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        // primary: 'rgb(var(--primary-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
