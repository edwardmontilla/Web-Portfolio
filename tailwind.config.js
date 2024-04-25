/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        }
        /* add float animation */
      },
      /* added bounce property so we can change the animation timing */
      /* added wiggle, pulse animations as a test */
      animation: {
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
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
