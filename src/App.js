import logo from './logo.svg';
import './App.css';
import SideDrawer from './components/SideDrawer';

import {  createTheme, ThemeProvider, alpha } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { AppBar, CssBaseline, Grid } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
  transitions: {
 
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.8, 0.1, 0.2, 0.9)',
      
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.71, 0.03, 0.56, 0.95)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
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
  
  
  components: {
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
            borderRadius: '12px'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'background.default'
         
        }
      }
    }
  
  
});
console.log(theme.transitions.duration)

const [mobileOpen, setMobileOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    
    
    <Grid 
      container
      maxWidth="xl"
      columns={12}
      style={{ minHeight: '100vh' }} 
      sx={{backgroundColor: 'background.default'}}> 
      
      {/* Navbar & Burger Menu */}
      <AppBar elevation={0} sx={{backgroundColor: 'background.default'}}>
          <MenuIcon 
            color="text.primary"
            onClick={() => {setMobileOpen(!mobileOpen)}}
            sx={{ m:3, ':hover': {color: 'primary.main'}}}
          />
      </AppBar>


      <SideDrawer
        sx={{ transitionTimingFunction: { enter: theme.transitions.easing.easeIn, exit: theme.transitions.easing.easeInOut, }, transitionDuration: { enter: theme.transitions.duration.standard, exit: theme.transitions.duration.standard, }}}
        theme={theme} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen}
      />
    
    
    
    </Grid>
    
    </ThemeProvider>
  );
}

export default App;
