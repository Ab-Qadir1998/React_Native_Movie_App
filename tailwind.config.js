/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        primary : '#030014',
        accent : '#ab8bff',
        secondary: '#151312',
        light : {
          100 : '#d6c5ff',
          200 : '#a8b85db',
          300 : '#9ca4ab',
        },
        dark : {
          100 : "#221f3d",
          200 : '#0f0d23',
        }
      }
    },
  },
  plugins: [],
};
