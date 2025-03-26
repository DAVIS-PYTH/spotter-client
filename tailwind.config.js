export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      extend: {
        animation: {
          spotlight: 'spotlight 2s ease .75s infinite',
        },
        keyframes: {
          spotlight: {
            '0%': {
              opacity: 0,
              transform: 'translate(-72%, -62%) rotate(0deg)',
            },
            '100%': {
              opacity: 1,
              transform: 'translate(-72%, -62%) rotate(360deg)',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
