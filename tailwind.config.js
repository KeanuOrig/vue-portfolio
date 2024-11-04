/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blakish': '#231F20',
      },
      fontFamily: {
        cursive: ['Pacifico', 'cursive'], // You can add more fallback fonts if needed
      },
      animation: {
        grow: 'grow 1.0s ease-in-out infinite',
        growonce: 'grow-once 0.6s ease-in-out forwards',
        shake: 'shake 0.6s ease-in-out 0.25s 1',
        wiggle: 'wiggle 1s ease-in-out infinite',
        wiggleonce: 'wiggle-once ease-in-out 0.25s 1',
        fadeinbounceleft: 'fade-in-bounce-left 1s ease-in-out forwards',
        fadeinbounceup: 'fade-in-bounce-up 0.5s ease forwards',
        fadeoutbouncedown: 'fade-out-bounce-down 0.5s ease forwards',
        fadeinexpand: 'fade-in-expand 0.5s ease forwards',
        fadeoutcollapse: 'fade-out-collapse 0.5s ease forwards',
        expandcircle: 'expand-circle 0.5s ease forwards',
        fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
        glow: 'glow 0.6s ease-in-out forwards',
      },
      keyframes: {
        "grow": {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        "grow-once": {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" }, 
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" }
        },
        "wiggle": {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
          '75%': { transform: 'rotate(-6deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        "wiggle-once": {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
          '75%': { transform: 'rotate(-6deg)' },
          '100%': { transform: 'rotate(6deg)' },
        },
        "fade-in-bounce-left": {
          "0%": {
              opacity: "0",
              transform: "translate3d(-100%, 0%, 0)",
          },
          "33%": {
              opacity: "0.5",
              transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
              opacity: "0.7",
              transform: "translate3d(-20%, 0%, 0)",
          },
          "100%": {
              opacity: "1",
              transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-up": {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        "fade-out-bounce-down": {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
        },
        "fade-in-expand": {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
          },
          '80%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        "fade-out-collapse": {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0)',
          },
        },
        "expand-circle": {
          '0%': {
            height: '40px',
            width: '40px',
            borderRadius: '50%',
          },
          '100%': {
            height: '200px',
            width: '80px',
            borderRadius: '20px',
            transform: 'translateY(-160px)',
          },
        },
        "fade-in-down": {
          "0%": {
              opacity: 0,
              transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          },
        },
        "glow": {
          "0%": {
              backgroundColor: "#def6de"
          },
          "100%": {
              backgroundColor: "#bfffbf"
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

