import { createTheme } from '@mui/material';

export { ThemeProvider } from '@mui/material';

export const indentRhythm = 10; // Rhythm offset
export const calcIndentRhythm = (multiplier: number = 1, units = 'px'): string => indentRhythm * multiplier + units;

export const fontPrimaryURL = 'https://fonts.googleapis.com/css2?family=Nunito&display=swap';

export const colorPrimary = '#F4E041';
export const colorSecondary = '#00BDD3';
export const colorBlack = '#000000DE';
export const colorWhite = '#fff';
export const colorBackground = '#e5e5e5';
export const colorErrorRed = '#CB3D40';

export const fontWeightRegular = 400;

export const headerHeight = 60;

export const fontSizePrimary = 16;

const basicFontStyle = {
  fontSize: fontSizePrimary,
  fontWeight: fontWeightRegular,
  color: colorBlack,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
    error: {
      main: colorErrorRed,
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    fontSize: fontSizePrimary,
    fontWeightRegular,
    h1: {
      ...basicFontStyle,
      fontSize: 40,
      lineHeight: 1,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: calcIndentRhythm(8),
          textTransform: 'capitalize',
          boxShadow: 'none',
          height: 34,

          '&:disabled': {
            backgroundColor: '#B4B4B4',
            color: colorWhite,
          },
          '&:hover': {
            backgroundColor: '#FFE302',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#D0CFCF',
            },
            '&.Mui-focused': {
              '& fieldset': {
                borderWidth: 1,
                borderColor: '#D0CFCF',
              },
            },
            '&.Mui-error': {
              '& fieldset': {
                borderWidth: 2,
                borderColor: colorErrorRed,
              },
            },
          },
          '& .MuiFormLabel-root': {
            '&.Mui-focused': {
              color: '#7E7E7E',
            },
            '&.Mui-error': {
              color: colorErrorRed,
            },
          },
        },
      },
    },
  },
});
