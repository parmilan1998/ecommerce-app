/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
        tilt: "'Tilt Neon', sans-serif",
      },
      colors: {
        lightSeaGreen: '#20B2AA',
        myrtleGreen: '#317873',
        jungleGreen: '#29AB87',
        processCyan: '#00B7EB',
        azure: '#007FFF',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}
