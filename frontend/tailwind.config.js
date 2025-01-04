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
        primary : '#2E5077',
        secondary : "#4DA1A9",
        green : "#79D7BE",
        grey : "#F6F4F0"
      }
    },
  },
  plugins: [],
}

