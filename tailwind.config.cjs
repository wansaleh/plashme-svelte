const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};

module.exports = config;
