import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#000000',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
