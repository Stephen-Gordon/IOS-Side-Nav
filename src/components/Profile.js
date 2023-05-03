//mui
import { Grid, Typography, Box, Stack, Switch, Button, Avatar } from "@mui/material";
import styled from "@emotion/styled";
import { ArrowForwardIos } from "@mui/icons-material";

//framer
import { AnimatePresence, motion } from "framer-motion";


const Profile = ({isProfileVisible}) => {


    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
      

    return (
          <AnimatePresence>
          {isProfileVisible && (    
          <motion.div 
            sx={{width: '100%', height: '100%'  }}
            style={{width: '100%', }}
            initial={{ x: "100%" ,  scale: 0.8}}
            animate={{
                x: 0,
                scale: 1,
                transition: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9]},
            }}
            exit={{
                x: "100%",
                opacity: 0,
                transition: { duration: 0.2, ease: [0.1, 0.8, 0.9, 0.2], opacity: 0.2 },
            }}
          >

            <Grid sx={{p:3, width: '100%', position: 'relative', backdropFilter: "blur(100px)", backgroundBlendMode: 'overlay',  height: '100%'}} >
              <Grid sx={{width: '100%', mb:3, justifyContent: 'center', display: 'flex' }}>
                  <Avatar sx={{ justifySelf: 'center', width: 56, height: 56 }}>S</Avatar>
              </Grid>
            
              <Grid sx={{mb:3}}>
                  <Typography textAlign={'center'} variant="h6">Stephen Gordon</Typography>
                  <Typography textAlign={'center'} color="text.secondary" variant="subtitle1">stephengordon48@gmail.com</Typography>
              </Grid>
                  

              <Grid sx={{ backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                  <Grid sx={{width: '100%',}}>

                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center', py:2, textTransform: 'none', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}} variant={"subtitle1"}  color="text.primary">
                              Name, Phone Numbers, Email
                              <ArrowForwardIos fontSize="small"/>
                          </Button>
                      </Stack>
                      
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                              <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center',  py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}} variant={"subtitle1"}  color="text.primary">
                                  Password & Security
                              <ArrowForwardIos fontSize="small"/>
                          </Button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                              <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center',  py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}} variant={"subtitle1"}  color="text.primary">
                                  Payment & Shipping
                              <ArrowForwardIos fontSize="small"/>
                          </Button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                              <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center', py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}} variant={"subtitle1"}  color="text.primary">
                                  Subscriptions
                                  <ArrowForwardIos fontSize="small"/>
                              </Button>
                      </Stack>

                  </Grid>
              </Grid>
                 
              <Button disableRipple sx={{mt: 3, backgroundColor: 'background.paper', width: '100%', textAlign: 'left', justifyContent: 'center', alignContent: 'center', py:2, textTransform: 'none', borderRadius: '12px', color: 'error.main'}} color="error.main" variant={"subtitle1"}>
                Sign Out
              </Button>
          
            </Grid>
          </motion.div>
          )}
          </AnimatePresence>
                   
    )   

}
export default Profile