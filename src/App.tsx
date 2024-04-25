import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme, responsiveFontSizes  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Montserrat from './fonts/Montserrat.ttf';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Montserrat, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          src: local('Montserrat'), url(${Montserrat}) format('TrueType');
        }
      `,
    },
  },
});
darkTheme = responsiveFontSizes(darkTheme);

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>Whereas disregard and contempt for human rights have resulted</main>
    </ThemeProvider>
  )
}

export default App
