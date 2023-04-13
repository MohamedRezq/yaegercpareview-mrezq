/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'greenish': '#038740',
        'reddish': '#f4364c',
        'darkish': '#212529',
        'grayish': '#E9F0DF'
      }
    },
  },
  plugins: [],
}
