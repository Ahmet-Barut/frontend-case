/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "headerbg":"#FEFBEB",
      "headertext":"#78350F",
      "sneakerbg":"#FBBF24",
      "cardbg":"#0F172A",
      "white":"#FFFFFF",
      "red":"#E11D48",
      "yellow":"#FBFF24",
      "green":"#22C55E",
      "sliderbg":"#FDE68A",
      "elips":"#A3E635",
      "info":"#E2E8F0"
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
}

