import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme, responsiveFontSizes  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Montserrat from './fonts/Montserrat.ttf';
import Stack from '@mui/material/Stack';
import Logo from './components/Logo/Logo';
import Progress from './components/Progress/Progress';
import Content from './components/Content/Content';

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
      <Stack spacing={2}>
        <Logo />
        <Progress />
        <Content />
      </Stack>
    </ThemeProvider>
  )
}

export default App
