import logo from './logo.svg';
import './App.css';
import SideDrawer from './components/SideDrawer';

import {  createTheme, ThemeProvider, alpha } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@mui/material';

function App() {
  
const [palette, setPalette] = useState(
  {
    "name": "Colors",
    "primary": {
        "main": "#4c82ed",
        "light": "#7196e1",
        "dark": "#0e43ad"
    },
    "secondary": {
      "main": "#7196e1",
      "light": "#8638d4",
      "dark": "#5805ab"
    },
    "error": {
      "main": "#FF6767",
      "light": "#FFA8A8",
      "dark": "#FF5757"
    },
    "warning": {
      "main": "#FFA954",
      "light": "#FFBF80",
      "dark": "#FF9E3D"
    },
    "info": {
      "main": "#70B7FF",
      "light": "#B4DAFF",
      "dark": "#57ABFF"
    },
    "success": {
      "main": "#70ff87",
      "light": "#b4ffc1",
      "dark": "#57ff73"
    },
    "background": {
        "default": "#121214",
        "paper": "#2c2d33"
    },
    "text": {
        "primary": "#fff",
        "secondary": "#cbcbcd",
        "disabled": ""
    }
}
)


const theme = createTheme({

  palette: {
      border: alpha(palette.text.primary, 0.1),
      primary: {
          light: palette.primary.light,
          main: palette.primary.main,
          dark: palette.primary.dark
      },
      secondary: {
          light: palette.secondary.light,
          main: palette.secondary.main,
          dark: palette.secondary.dark,
      },
      error: {
        light: palette.error.light,
        main: palette.error.main,
        dark: palette.error.dark,
      },
      warning: {
        light: palette.warning.light,
        main: palette.warning.main,
        dark: palette.warning.dark,
      },
      info: {
        light: palette.info.light,
        main: palette.info.main,
        dark: palette.info.dark,
      },
      success: {
        light: palette.success.light,
        main: palette.success.main,
        dark: palette.success.dark,
      },
      background: {
          default: palette.background.default,
          paper: palette.background.paper

      },
      text: {
          primary: palette.text.primary,
          secondary: palette.text.secondary
      }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          transition: 'all 5s linear',
        },
      },
    },
  },
  components: {
      MuiPaper: {
        styleOverrides: {
          root: {
           borderColor: '#2b2b2b'
          }
        }
      },
      MuiList: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexFlow: "row wrap",
            justifyContent: 'center',
            borderRadius: '12px',
            maxWidth: '200px',
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            backgroundColor: 'primary.main',
            display: 'flex',
            justifyContent: 'space-around',
            borderRadius: '12px',
            width: '100%',
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'
          },
          notchedOutline:{
            border: 0,
            
          },
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ":hover": {
              opacity: 0.9,
              
            },
            fontSize: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '32px',
            paddingRight: '32px',
            borderRadius: '24px'
          }
        }
      }
    },
  
});

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Grid 
      container
      maxWidth="xl"
      columns={12}
      style={{ minHeight: '100vh' }} 
      sx={{backgroundColor: 'background.default'}}> 
      <SideDrawer theme={theme}/>
    </Grid>
    
    </ThemeProvider>
  );
}

export default App;
