/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Hide scrollbar
    require("tailwindcss-scrollbar"), // Optional: Customizable scrollbar styles
  ],
};
