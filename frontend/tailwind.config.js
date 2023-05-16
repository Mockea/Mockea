/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey": "#f5f5f5",
        "hovergrey" : "#DFDFDF",
        "clickgrey" : "#8A8A8A"
      }
    },
  },
  plugins: [],
}
