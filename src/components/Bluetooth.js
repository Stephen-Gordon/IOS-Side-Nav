//mui
import { Grid, Typography, Stack, Switch, Button } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from "@emotion/styled";
import { ArrowForwardIos } from "@mui/icons-material";

//framer
import { AnimatePresence, motion } from "framer-motion";

const Bluetooth = ({isBluetoothVisible}) => {


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
        {isBluetoothVisible && (
                    
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
          <Grid sx={{p:3, width: '100%', position: 'relative', backdropFilter: "blur(100px)", backgroundBlendMode: 'overlay',  height: '100%',  }} >
            <Grid sx={{ backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
            
                <Grid sx={{width: '100%',}}>
                      <Stack sx={{px: '32px', my:1, py:1,}} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant={"subtitle1"} color="text.primary">
                                Bluetooth
                        </Typography>
                        <IOSSwitch defaultChecked  />
                      </Stack>
                </Grid>
            
            </Grid>

            <Grid sx={{ backgroundColor: 'background.paper', mt:3, border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
            
                <Grid sx={{width: '100%',}}>
                    <Stack sx={{px: '32px', my:1, py:1,}} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant={"subtitle1"} color="primary.main">
                                Allow New Connections
                        </Typography>
                        <IOSSwitch defaultChecked  />
                    </Stack>
                </Grid>
            
            </Grid>

            <Typography sx={{ml:2, mt:0.5, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                New Bluetooth connections have been turned off from Control Center.
            </Typography>
      
            <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                My Devices
            </Typography>




              <Grid sx={{ backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                  <Grid sx={{width: '100%',}}>

                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center',  py:2, borderTop: '0px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}} variant={"subtitle1"}  color="text.primary">
                              <Typography>Pro 5</Typography>
                              <Grid sx={{display: 'flex', alignItems: 'center'}}>
                              <Typography>Not connected</Typography>
                              <InfoOutlinedIcon sx={{ml:1, color: 'primary.main'}} fontSize="small"/>
                              </Grid>
                          </Button>
                      </Stack>
                      
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center',  py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}} variant={"subtitle1"}  color="text.primary">
                              <Typography>JBL</Typography>
                              <Grid sx={{display: 'flex', alignItems: 'center'}}>
                              <Typography>Not connected</Typography>
                              <InfoOutlinedIcon sx={{ml:1, color: 'primary.main'}} fontSize="small"/>
                              </Grid>
                          </Button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center',  py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}} variant={"subtitle1"}  color="text.primary">
                              <Typography>Bose</Typography>
                              <Grid sx={{display: 'flex', alignItems: 'center'}}>
                              <Typography>Not connected</Typography>
                              <InfoOutlinedIcon sx={{ml:1, color: 'primary.main'}} fontSize="small"/>
                              </Grid>
                          </Button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center', py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}} variant={"subtitle1"}  color="text.primary">
                              Speaker
                              <Grid sx={{display: 'flex', alignItems: 'center'}}>
                              <Typography>Connected</Typography>
                              <InfoOutlinedIcon sx={{ml:1, color: 'primary.main'}} fontSize="small"/>
                              </Grid>                                    </Button>
                      </Stack>

                  </Grid>
              </Grid>  
          </Grid>
        </motion.div>
        )}
        </AnimatePresence>
                   
    )   

}
export default Bluetooth