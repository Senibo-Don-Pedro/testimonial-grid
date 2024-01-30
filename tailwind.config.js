/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        QModerateviolet: 'hsl(263, 55%, 52%)',
        QVerydarkgrayishblue: 'hsl(217, 19%, 35%)',
        Verydarkblackishblue: 'hsl(219, 29%, 14%)',
        QLightgray: 'hsl(0, 0%, 81%)',
        QLightgrayishblue: 'hsl(210, 46%, 95%)',
      },
    },
  },
  plugins: [],
}
