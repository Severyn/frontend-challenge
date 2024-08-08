/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: '"Josefin Sans", sans-serif',
    },
    extend: {
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        gold: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        grayishBlue: 'hsl(236, 33%, 92%)',
        gray: 'hsl(0, 0%, 98%)',
        lightGrayishBlue: 'hsl(233, 11%, 84%)',
        darkGrayishBlue: 'hsl(236, 9%, 61%)',
        veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
      },
      backgroundImage: {
        'bg-mobile': "url('/src/assets/images/bg-mobile-light.jpg')",
        'bg-desktop': "url('/src/assets/images/bg-desktop-light.jpg')",
      }
    },
  },
  plugins: [],
}