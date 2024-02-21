/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        info: colors.sky,
        success: colors.emerald,
        error: colors.red,
        warning: colors.amber,
        primary: {
          100: 'hsl(276, 100%, 79%)',
          200: 'hsl(276, 79%, 69%)',
          300: 'hsl(276, 53%, 49%)',
          400: 'hsl(276, 64%, 48%)',
          500: 'hsl(276, 96%, 20%)',
        },
        secondary: {
          100: 'hsl(173, 81%, 68%)',
          200: 'hsl(173, 80%, 63%)',
          300: 'hsl(173, 72%, 57%)',
          400: 'hsl(173, 75%, 47%)',
          500: 'hsl(173, 90%, 30%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(200, 23%, 97%)',
          300: 'hsl(200, 12%, 95%)',
          400: 'hsl(205, 12%, 88%)',
          500: 'hsl(209, 13%, 83%)',
          600: 'hsl(208, 6%, 55%)',
          700: 'hsl(210, 8%, 31%)',
          800: 'hsl(212, 9%, 22%)',
          900: 'hsl(210, 10%, 14%)',
        },
        dark: {
          100: 'hsl(240, 4%, 9%)',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
