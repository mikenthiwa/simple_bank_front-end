module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/6': '10%',
        '1/7': '20%',
        '2/7': '17%',
        '3/7': '20%',
        '5/7': '80%'
      },
      textColor: {
        primary: '#71879B',
        secondary: '#2D445C',
        dashBoardBalanceColor: '#457486'
      },
      backgroundColor: {
        primary: '#f2f7fc',
        secondary: '#429BFB',
        activeNavItem: '#e7f2ff',
        cardPrimary: '#cdf4ff'
      },
      lineHeight: {
        '60': '60px'
      },

    },
    fontFamily: {
      roboto:['Roboto', 'sans-serif']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    borderColor: theme => ({
      ...theme('colors'),
      secondary: '#0b6ffc'
    }),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
