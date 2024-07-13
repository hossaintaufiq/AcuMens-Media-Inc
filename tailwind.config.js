/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom extra-small breakpoint
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      fontFamily: {           
        syne: ["Syne", "sans-serif"],  // custom font-family
        kanit: ["Kanit", "sans-serif"]
      },
      colors : {
        'blue-Purple' : "#5f4cdd",
        'light-purple' : "#eeebff",
        'custom-purple': '#B0A7EF',
        'custom-grey': '#E2E2E2',
        
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui:{
    darkTheme:"light",
  }
}

