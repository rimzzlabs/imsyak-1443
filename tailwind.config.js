/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        primary: {
          1: colors.emerald[400],
          2: colors.emerald[500],
          3: colors.emerald[600]
        },
        theme: {
          1: colors.gray[50],
          2: colors.gray[200],
          3: colors.gray[700],
          4: colors.gray[800]
        }
      }
    }
  },
  plugins: []
}
