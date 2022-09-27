/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent1: '#60E2FF',
        accent2: '#CEFF7D',
        glassBlack: 'rgba(0 0 0 / 50%)',
        glassWhite: 'rgba(255 255 255 / 50%)',
      },
      fontFamily: {
        'sans': ['Inter', 'Ubuntu', 'Roboto', 'sans-serif'],
        'display': ['"DIN Alternate Bold"', 'Ubuntu', 'sans-serif'],
        'heading': ['Inter', 'Ubuntu', 'Roboto', 'sans-serif'],
        'body': ['Inter', 'Ubuntu', 'Roboto', 'sans-serif'],
        'serif': ['serif']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    screens: {
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-fluid-type'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
}
