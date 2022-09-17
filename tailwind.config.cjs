/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent1: '#60E2FF',
        accent2: '#CEFF7D',
      },
      fontFamily: {
        'sans': ['Inter', 'Ubuntu', 'Roboto', 'sans-serif'],
        'display': ['"DIN Alternate Bold"', 'Ubuntu', 'sans-serif'],
        'heading': ['Inter', 'Ubuntu', 'Roboto', 'sans-serif'],
        'body': ['Inter', 'Ubuntu', 'Roboto', 'sans-serif'],
        'serif': ['serif']
      },
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
