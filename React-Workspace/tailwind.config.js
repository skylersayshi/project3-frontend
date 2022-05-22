const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}