/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1400px',
    },
    extend: {
      colors: {
        spicyGold: 'hsl(50, 94%, 49%)',
        spicyGoldLight: 'hsl(50, 94%, 69%)',
        spicyGoldSupLight: 'hsl(50, 94%, 95%)',
        babyBlue: 'hsl(197, 88%, 69%)',
        babyBlueLight: 'hsl(197, 88%, 80%)',
        babyBlueLowSat: 'hsl(197, 45%, 69%)',
        sonicSilver: 'hsl(229, 4%, 48%)',
        sonicSilverDark: 'hsl(223, 5%, 30%)',
        babyPowder: '#fffffc',
      }
    },
  },
  plugins: [],
}
