module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '6/12': '49%',
        '10/12': '83%',
        '11/12': '91%',
        '11.5/12': '95%'
      },
      width: {
        '5.5/12': '45%',
        '11.5/12': '95%'
      },
    },
  },
  plugins: [],
}