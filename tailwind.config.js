/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      //   wiggle: 'wiggle 1s ease-in-out infinite'
      // }
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
     fontFamily:{
      Nunito:['Alegreya Sans','sans-serif']
     }
    },
  },
  safelist: [
    "animate-[tada]",
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-down_1s_ease-in-out]",
  ],
  plugins: [],
};