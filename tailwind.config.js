/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Red Rose", "cursive"]
    },
    
    extend: {
      colors: {
        purple: "#A02279"
      }
    },
  },
  plugins: [],
}
