module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          teal: {
            500: '#0AB3B8',
          },
          purple: {
            700: '#8A2B7D',
          },
          blue: {
            700: '#3A5B7D',
            900: '#1B365D',
          },
          lime: {
            500: '#A5B82E',
          },
          orange: {
            500: '#FF6B35',
          },
        },
      },
    },
    plugins: [],
  }
  