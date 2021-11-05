const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: 'Supreme, system-ui, sans-serif',
        clock: 'Supreme, system-ui, sans-serif',
      },
    },
  },

  plugins: [],
};

module.exports = config;
