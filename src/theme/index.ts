import { HexToCssConfiguration, hexToCSSFilter } from 'hex-to-css-filter/dist/es2015';

import { createMuiTheme } from '@material-ui/core/styles';

const config: HexToCssConfiguration = {
  acceptanceLossPercentage: 1,
  maxChecks: 10,
};

const getFilter = (hexColor: string) => hexToCSSFilter(hexColor, config).filter

// **
// * Sugoi Color Palletes can be handled here, and declared as a palette object with needed configurations.
// *
// * Primary Green Gradient:    74DD9F - 27C69F - 120 Degrees
// * Secondary Blue Gradient :  1B5FED - 1B87ED - 179 Degrees
// * Terciary Yellow Gradient : FFC272 - FFE272 - 0 Degrees
// * Wrap Gradient :            878787 - FFFFFF - 127 Degrees - 0.35 Transparency 
// * Black Background :         231F20
// * White Background :         FFFFFF
// ** 

export const sugoiPalette = {
  primary: {
    gradient: 'linear-gradient(to right, #8AC294 20%, #000000, 20%)',
    start: '#FAEDDE',
    mid: '#96B9D0',
    end: '#96B9D0',
    700: '#1B5FED',
    direction: '120deg',
  },
  secondary: {
    gradient: 'radial-gradient(circle at right, #9c27b0, #ff9800)',
    start: '#1B5FED',
    mid: '#1B6DED',
    end: '#1B87ED',
    300: '#66D9EF',
    800: '#A4C3D2',
    900: '#FDE7F7',
    1000: '#F7C7FE',
    400: '#1672F9',
    direction: 179,
  },
  terciary: {
    gradient: 'linear-gradient(to right, #A4C3D2, #96B9D0, #78A2CC)',
    400: '#96B9D0',
    500: '#78A2CC',
    direction: 0,
  },
  purple: {
    300: '#BB95FF',
    400: '#AE81FF',
  },
  wrapGradient: {
    gradient: 'linear-gradient(0deg, #000000 35%, #FFFFFF 35%)',
    start: '#878787',
    end: '#FFFFFF',
    direction: 0,
    opacity: 0.35,
  },
  black: '#000000',
  white: '#FFFFFF',
}


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: sugoiPalette.primary.start,
      dark: sugoiPalette.primary.end,
    },
    secondary: {
      main: sugoiPalette.secondary.end,
      dark: sugoiPalette.secondary.start,
    },
    text: {
      primary: sugoiPalette.black,
      secondary: '#000000',
      disabled: 'rgba(255,255,255,0.3)',
    },
    background: {
      default: sugoiPalette.secondary['900'],
    }
  },
  typography: {
    fontFamily: `'C', Montserrat`,
    h1: {
      fontSize: 80,
      fontWeight: 900,
      lineHeight: 1,
    },
    h2: {
      fontSize: 50,
      fontWeight: 900,
      lineHeight: 1,
    },
    h3: {
      fontSize: 40,
      fontWeight: 900,
      lineHeight: 1,
      '@media (max-width:650px)': {
        fontSize: 32,
      },
    },
    h4: {
      fontSize: 32,
      fontWeight: 900,
      lineHeight: 1,
      '@media (max-width:650px)': {
        fontSize: 28,
      },
    },
    subtitle1: {
      fontSize: 30,
      fontWeight: 800,
      lineHeight: 1.5
    },
    subtitle2: {
      fontSize: 26,
      fontWeight: 750,
      lineHeight: 1.5
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.75,
      fontWeight: 600,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: sugoiPalette.secondary[900],
        },
        body: {
          overflowX: 'hidden',
        },
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiInput: {
      root: {
        background: `${sugoiPalette.secondary[900]}88`,
        backdropFilter: "blur(8px)",
        border: `solid 1px ${sugoiPalette.primary[700]}`,
        borderRadius: 4,
        fontSize: "1rem",
        fontWeight: 500,
        transition: "background 0.25s ease-in-out",
        "&.Mui-focused": {
          background: sugoiPalette.secondary[900]
        },
      },
    },
    MuiTextField: {
      root: {
        '& .MuiInput-underline:before': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '0'
        }
      },
    },
    MuiButton: {
      containedPrimary: {
        background: `radial-gradient(circle at 80% 50%, ${sugoiPalette.terciary[400]}, ${sugoiPalette.terciary[500]})`,
        backgroundSize: '250%',
        backgroundPositionX: '0px',
        borderRadius: 999,
        boxShadow: `0 8px 16px ${sugoiPalette.secondary[400]}`,
        color: sugoiPalette.secondary['900'],
        fontWeight: 700,
        transform: 'translateY(0)',
        transition: 'background 0.25s ease-in-out, transform 0.25s ease-in-out',
        '&:hover': {
          backgroundPositionX: '30%',
          transform: 'translateY(-1px)'
        },
        '& .MuiButton-endIcon': {
          marginLeft: 4,
        }
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          color: sugoiPalette.primary.start
        }
      }
    },
  }
});


export const filters = {
  // sets color of Launch Partners when idle 
  textSecondary: getFilter(sugoiPalette.wrapGradient.start),

  // sets color for Launch Partners on-hover
  secondary: getFilter(sugoiPalette.terciary[400]) 
};