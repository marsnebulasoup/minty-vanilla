const plugin = require("tailwindcss/plugin")
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "_layouts/**/*.html",
    "_includes/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "mint": "#E6FFFA",
        "dark-mint": "#77B9A7"
      },
      fontFamily: {
        'sans': ['Urbanist', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {
      alignSelf: ["odd"],
      textAlign: ["odd"],
      display: ["last"]
    }
  },
  safelist: [
    'flex-row-reverse',
    'rounded-r-full',
    'rounded-l-full',
    'rounded-l-3xl',
    'rounded-r-3xl',
    'pr-6',
    'pl-0',
    'pl-6',
    'pr-0',
  ],
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'a': {
          'color': 'blue',
          'text-decoration': 'underline'
        },
      })
    })
  ],
}
