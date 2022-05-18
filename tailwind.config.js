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
      textAlign: ["odd"]
    }
  },
  plugins: [],
}
