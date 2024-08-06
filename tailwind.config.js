/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-957": "957px",
      },
      colors:{
        btnleft: '#c21500',
        btnright: '#ffc500',
      },
      
    },
  },
  plugins: [],
};

