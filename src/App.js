
import SideDrawer from './components/SideDrawer';

import {  createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { AppBar, CssBaseline, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  

  const [mobileOpen, setMobileOpen] = useState(true);

  const theme = createTheme({
    transitions: {
      easing: {
        easeOut: 'cubic-bezier(0.8, 0.1, 0.2, 0.9)',
        easeIn: 'cubic-bezier(0.71, 0.03, 0.56, 0.95)',
      },
    },
    palette: {
        border: alpha("#fff", 0.1),
        primary: {
            main: "#4c82ed",
        },
        error: {
          main: "#FF6767",
        },
        background: {
            default:  "#121214",
            paper: "#2c2d33"
        },
        text: {
            primary: "#fff",
            secondary: "#cbcbcd"
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


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    
    {/* Navbar & Burger Menu */}
    <AppBar elevation={0} sx={{backgroundColor: 'background.default',  position:'relative',}}>
        <MenuIcon 
          color="text.primary"
          onClick={() => {setMobileOpen(!mobileOpen)}}
          sx={{ m:3, ':hover': {color: 'primary.main'}}}
        />
      </AppBar>
    


    {/* Main */}
    
    <Container maxWidth="sm" sx={{ backgroundColor: 'background.default', mt: 5,}}>

      <Grid item xs={12} >
        <Typography variant='h3' color="text.primary">iOS style side navigation</Typography>
      </Grid>
      
      <Grid item xs={12} sx={{mt: 5}}>
        <Typography sx={{mb:5}} variant='body1' color="text.primary">Inspired by iOS 16. Using Framer Motion for Transitions and Animations. The Bezier curves below along with cahnging opacity and scale are used to create smooth transitions between tabs. In the NAvbar, the fontsize and color is also being animated when changing page.</Typography>
      </Grid>

      <Grid item xs={12} sx={{mt: 5}}>
        <Typography sx={{mb:5}} variant='body1' color="text.primary"> </Typography>
      </Grid>

      <Grid item xs={6} sx={{mt: 5, backgroundColor: 'background.paper', p:5, borderRadius: '24px'}}>
          <Typography  textAlign="center" variant='body1' color="text.primary">Ease in Curve</Typography>
          <Typography  textAlign="center" color="primary.main">0.8, 0.1, 0.2, 0.9 </Typography>
      </Grid>
     
      <Grid item xs={6} sx={{mt: 5, backgroundColor: 'background.paper', p:5, borderRadius: '24px'}}>
          <Typography textAlign="center" variant='body1' color="text.primary">Ease out Curve</Typography>
          <Typography textAlign="center" color="primary.main">0.71, 0.03, 0.56, 0.95 </Typography>
      </Grid>    

      <SideDrawer
        sx={{ transitionTimingFunction: { enter: theme.transitions.easing.easeIn, exit: theme.transitions.easing.easeInOut, }, transitionDuration: { enter: theme.transitions.duration.standard, exit: theme.transitions.duration.standard, }}}
        theme={theme} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen}
      />
    
    
    
    </Container>
    
    </ThemeProvider>
  );
}

export default App;
