/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg')",
      },
    },
  },
  plugins: [],
};
