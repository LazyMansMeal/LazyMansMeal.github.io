const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          50: '#F4FAFE',
          100: '#E9F5FE',
          200: '#C8E5FC',
          300: '#A6D5FA',
          400: '#64B6F7',
          500: '#2196F3',
          600: '#1E87DB',
          700: '#145A92',
          800: '#0F446D',
          900: '#0A2D49',
        },
        'secondary': {
          50: '#F2FEF8',
          100: '#E6FDF1',
          200: '#BFF9DD',
          300: '#99F5C8',
          400: '#4DEE9F',
          500: '#00E676',
          600: '#00CF6A',
          700: '#008A47',
          800: '#006835',
          900: '#004523',
        },
        'warning': {
          ...defaultTheme.colors.yellow
        },
        'danger': {
          ...defaultTheme.colors.red
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
