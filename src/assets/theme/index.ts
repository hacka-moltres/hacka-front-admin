import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import overrides from './overrides';

export const boxShadow = '0px 2px 3px 0px rgba(0,0,0,0.08)';

export const theme = createMuiTheme({
  overrides,
  shadows: [
    'none',
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow,
    boxShadow
  ],
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});
