import { colors, fonts } from './src/theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        accent: colors.accent,
        secondary: colors.secondary,
        background: colors.background,
        'text-primary': colors.textPrimary,
        'text-secondary': colors.textSecondary,
        carriers: colors.carriers,
      },
      fontFamily: {
        heading: fonts.heading,
        body: fonts.body,
      },
    },
  },
}
