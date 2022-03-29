module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.js',
    './pages/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#191919"
      },
      height: {
        custom_md: '43%',
        custom_lg: '57%',
        circle_height: '80px',
        half_screen: '50vh'
      },
      width: {
        circle_width: '80px',
      }
    },
  },
  variants: {},
  plugins: [
    'tailwindcss',
    'precss',
    'autoprefixer',
    'postcss-import',
  ]
}
