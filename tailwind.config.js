/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "image-one": "url('./images/bg-desktop-light.jpg?${Date.now()}')",
        "image-two": "url('./images/bg-desktop-dark.jpg?${Date.now()}')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
