/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '280px',
      'xs': '380px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    },
    extend: {
      fontFamily: {
        roboto: ['roboto-normal'], 
        robotoBold: ['roboto-bold'], 
        robotoExtraBold: ['roboto-extrabold'], 
      },
      colors : {
        primary : '#315a39',
        secondary : "#b1dd9e",
      }
    },
  },
  plugins: [],
}

