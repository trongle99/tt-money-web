/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "media",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
        secondary: ["Intervar", "sans-serif"],
        code: ["SF mono", "sans-serif"],
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      colors: {
        grayf5: "#F5F7FA",
        primary: "#fc6c8f",
        secondary: "#fcb564",
        third: "#6a5af9",
        fourth: "#d66efd",
      },
    },
  },
  plugins: [],
}