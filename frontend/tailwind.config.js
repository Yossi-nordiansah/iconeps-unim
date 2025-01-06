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
        radjdhani_semibold : ['radjdhani_semibold'],
        radjdhani_medium:['radjdhani_medium'],
        radjdhani_bold:['radjdhani_bold'],
        radjdhani_regular:['radjdhani_regular'],
        radjdhani_light:['radjdhani_light'] 
      },
      colors : {
        primary : '#2E073F',
        secondary : "#7A1CAC",
        purple : "#AD49E1",
        whitepurple : "#EBD3F8"
      },
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(138, 0, 230, 0.5), 0 2px 4px -1px rgba(255, 77, 255, 0.3)',
      },
      dropShadow: {
        'custom-light': '0 1px 2px rgba(138, 0, 230, 0.5)'
      },
    },
  },
  plugins: [],
}

