/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        CustomDarkGrey : '#141414',
        WindowBorder : "#393939",
        JSYellow : "#F1DD50",
        TSBlue : "#3179C7"
      },
      height: {
        '7vh': '7vh',
        '93vh' : '93vh',
      }
    },
  },
  plugins: [],
}

