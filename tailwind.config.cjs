/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          center: true,

          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '3rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        body: "'NeueHaasDisplayMedium'",
        Fontspring: "'Fontspring'",
        neueLight: "'NeueHaasDisplayLight'",
      },
    },
  },
  plugins: [],
};
