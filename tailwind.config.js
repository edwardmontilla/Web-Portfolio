const { transform } = require('next/dist/build/swc')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // added a new color scheme
      colors: {
        'text': '#333333',
        'background': '#E3FEF7',
        'primary': '#135D66',
        'secondary': '#77B0AA',
        'accent': '#003C43',
       },
      /* added keyframes to further play with the animations :D */
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: 0 },
        },

// slideFade animations
        slideFadeRight: {
          '0%': { opacity: 0, transform: 'translateX(50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideFadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50%)'},
          '100%': { opacity: 1, transform: 'translateX(0)'},
        },
        slideFadeUp: {
          '0%': { opacity: 0, transform: 'translateY(65%)'},
          '100%': { opacity: 1, transform: 'translateY(0)'},
        },
        slideFadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-65%)'},
          '100%': { opacity: 1, transform: 'translateY(0)'},
        },

// animations for waves svg
        waveX1: {
          '0%, 100%': {transform: 'translateX(0%)'},
          '50%': {transform: 'translateX(5%)'},
        },
        waveX2: {
          '0%, 100%': {transform: 'translateX(5%)'},
          '50%': {transform: 'translateX(0%)'},
        },
        waveX3: {
          '0%, 100%': {transform: 'translateX(3%)'},
          '50%': {transform: 'translateX(-3%)'},
        },

        waveY1: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(5%)'},
        },
        waveY2: {
          '0%, 100%': {transform: 'translateY(5%)'},
          '50%': {transform: 'translateY(0%)'},
        },
        waveY3: {
          '0%, 100%': {transform: 'translateY(5%)'},
          '50%': {transform: 'translateY(0%)'},
        },




        /* add float animation */
      },
      /* added bounce property so we can change the animation timing */
      /* added wiggle, pulse animations as a test */
      animation: {
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',

// added slideFade animations
        slideFadeRight: 'slideFadeLeft 2s',
        slideFadeLeft: 'slideFadeRight 2s',
        slideFadeUp: 'slideFadeUp 1.5s ease-in-out',
        slideFadeDown: 'slideFadeDown 1.5s ease-in-out',

// animation for waves svg
        waveX1: 'waveX1 4s linear infinite',
        waveX2: 'waveX2 4s linear infinite',
        waveX3: 'waveX3 4s linear infinite',
        waveY1: 'waveY 4s linear infinite',
        waveY2: 'waveY2 4s linear infinite',
        waveY3: 'waveY3 4s linear infinite',


        /* add float animation */
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
