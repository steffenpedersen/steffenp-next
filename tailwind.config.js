module.exports = {
    purge: [
      './pages/**/*.tsx',
      './components/**/*.tsx'
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fonts: {
          'body': [
            'Roboto',
            'sans-serif',
          ],
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
