const { transform } = require('next/dist/build/swc')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
// added a new color scheme
      // colors: {
      //   'text': '#333333',
      //   'background': '#E3FEF7',
      //   'primary': '#135D66',
      //   'secondary': '#77B0AA',
      //   'accent': '#003C43',
      //   'middle': '#00474F',
      //  },

// second color scheme       
       colors: {
        'text': '#333333',
        'background': '#DDE6ED',
        'primary': '#526D82',
        'secondary': '#9DB2BF',
        'accent': '#27374D',
        'middle': '#7B91A2',
       },

// added default Tailwind animations
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
        fadeInOut: {
          '0%, 20%, 80%, 100%': { opacity: 0 },
          '25%, 75%': { opacity: 1 },
        },

// for projects in about me
        slideProjRight: {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

// animations for waves svg
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1%)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1%)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1%)' },
        },
        fish: { //change rotation degree and X position if need be
          '0%, 100%': { transform: 'translateX(-25%) rotate(3deg)' },
          '50%': { transform: 'translate(0) rotate(-5deg)' },
        },


        // add bubbles animation

      },

// added default Tailwind animations
      animation: {
        bounce: 'bounce 2.5s infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',

// added slideFade animations
        slideFadeRight: 'slideFadeLeft 2s',
        slideFadeLeft: 'slideFadeRight 2s',
        slideFadeUp: 'slideFadeUp 2s',
        slideFadeDown: 'slideFadeDown 2s',
        fadeInOut: 'fadeInOut 10s ease-in-out infinite',

// for projects in about me
        slideProjRight: 'slideProjRight 0.5s',



// animation for waves svg
        float: 'float 4s ease-in-out infinite',
        float2: 'float2 4s ease-in-out infinite',
        float3: 'float3 2s ease-in-out infinite',
        fish: 'fish 4s ease-in-out infinite',

        
        // add bubbles animation

      },


      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require ('tailwindcss-animation-delay'),
  ],
};
