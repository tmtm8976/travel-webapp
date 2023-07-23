const { MdBorderColor } = require('react-icons/md');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeIn: 'fadeInUp 0.5s ease-in-out',
        fadeOut: 'fadeOutDown 1s both'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(50px)' },
        },

      }),
    },
  },
  plugins: [],
}

