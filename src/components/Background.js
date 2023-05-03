import { Grid, Typography, Box, Stack, Switch, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { AnimatePresence, motion } from "framer-motion";

import { alpha } from "@mui/material";
import WifiIcon from '@mui/icons-material/Wifi';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from "@emotion/styled";
const Background = ({isBackgroundVisible}) => {


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
            {isBackgroundVisible && (
                    
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
                                
                                  <Stack sx={{px: '32px', mt:1, py:1,}} direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant={"subtitle1"} color="text.primary">
                                            Wi-Fi
                                    </Typography>
                                    <IOSSwitch defaultChecked  />
                                  </Stack>
                          
                                
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                      <Button  disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'space-between', alignContent: 'center',  mt:1, py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}} variant={"subtitle1"}  color="text.primary">
                                        Starbux Free Wi-fi
                                        <WifiIcon fontSize="small"/>
                                    </Button>
                                   
                                </Stack>
                                
                            </Grid>
                        
                        </Grid>
                 


                
                    
                   
                  
                       <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                            Networks
                        </Typography>

                        <Grid sx={{  backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                          
                        <Grid sx={{width: '100%',}}>
                                
                                <Stack sx={{px: '32px', mt:1, py:1,}} direction="row" justifyContent="space-between" alignItems="center">
                                  <Typography variant={"subtitle1"} color="text.primary">
                                  Another Free Wi-Fi
                                  </Typography>
                                  <IOSSwitch defaultChecked  />
                                </Stack>
                        
                              
                              <Stack direction="row" justifyContent="space-between" alignItems="center">
                                  <Button disableRipple sx={{width: '100%', textAlign: 'left', justifyContent: 'flex-start', alignContent: 'center',  mt:1, py:2, borderTop: '1px solid', borderColor: 'border', textTransform: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}} variant={"subtitle1"}  color="text.primary">
                                    Other...
                                  </Button>
                              </Stack>
                              
                          </Grid>



                        </Grid>

                        <Button disableRipple sx={{mt:3, backgroundColor: 'background.paper', width: '100%', textAlign: 'left', justifyContent: 'flex-start', alignContent: 'center', py:2, textTransform: 'none', borderRadius: '12px'}} variant={"subtitle1"}  color="text.primary">
                            Ask to Join Networks
                        </Button>

                        <Button disableRipple sx={{mt:3, backgroundColor: 'background.paper', width: '100%', textAlign: 'left', justifyContent: 'flex-start', alignContent: 'center', py:2, textTransform: 'none', borderRadius: '12px'}} variant={"subtitle1"}  color="text.primary">
                            Auto-join Hotspot
                        </Button>
                       

                            
                     
                                
                 
       
    </Grid>

    </motion.div>
        )}
        </AnimatePresence>
                   
    )   

}
export default Background