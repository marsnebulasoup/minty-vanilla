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
  plugins: [],
}
