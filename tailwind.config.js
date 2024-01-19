/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "100vh-360px": "calc(100vh - 365px)",
      },
    },
  },
  plugins: [],
};
