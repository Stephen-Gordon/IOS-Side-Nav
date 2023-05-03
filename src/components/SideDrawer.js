//react
import { useState } from "react";
//mui
import { Drawer } from "@mui/material"
import { alpha } from "@mui/material"
import { AppBar, Grid, Typography, Avatar } from "@mui/material";
import styled from "@emotion/styled";
import Button from '@mui/material/Button';

//framer motion
import { AnimatePresence, motion } from "framer-motion";

//icons
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ArrowForwardIos } from "@mui/icons-material";

//pages
import Profile from "./Profile";
import Bluetooth from "./Bluetooth";
import Wifi from "./Wifi";

const SideDrawer = ({theme, mobileOpen, setMobileOpen}) => {
    

    
    const StyledButton = styled(Button)({
        '&.MuiButtonBase-root-MuiTab-root,': {
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(theme.palette.background.paper, 0.5),
                backgroundColor: theme.palette.background.paper,
            },
            '&.Mui-selected': {
                backgroundColor: theme.palette.background.paper,
                width: '100%',
                color: theme.palette.text.primary,
            },
            transition: 'ease-in-out 0.2s',
            width: '100%',
            alignItems: 'center',
            textAlign: 'left',
            textTransform: 'none',
            color: theme.palette.text.primary,
            fontSize: '20px',
            fontWeight: '400',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '24px',
            paddingRight: '24px',
            borderRadius: '12px',
            justifyContent: 'space-between',
            alignContent: 'center',
            backgroundColor: theme.palette.background.paper,
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(theme.palette.background.paper, 0.5),
                transition: 'ease-in-out 0.2s',
                '@media (hover: none)': {
                backgroundColor: alpha(theme.palette.background.paper, 0.5),
                },
            },
        }
    });
    console.log(theme.transitions.easing)
    

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


        	
    
    //state
    const [isWifiVisible, setIsWifiVisible] = useState(false);

    const [isPageVisible, setPageVisible] = useState(false)
    const [isProfileVisible, setIsProfileVisible] = useState(false)
    const [isBluetoothVisible, setIsBluetoothVisible] = useState(false)
    const [isHomeVisible, setIsHomeVisible] = useState(true);
  
    const [size, setSize] = useState(theme.typography.h4.fontSize);
    const [title, setTitle] = useState('Controller');
    const [color, setColor] = useState(theme.palette.text.primary);

    
    const handleText = (size, title, color) => {
        setSize(size)
        setTitle(title)
        setColor(color)
    }


    //curves
    let easeEntry = [0.8, 0.1, 0.2, 0.9]
    let easeExit = [0.71, 0.03, 0.56, 0.95]

    let marginLeft = 0;
    if(isHomeVisible){
        marginLeft = 3
    }
    
    let pointerBool = 'pointer';
    if(isHomeVisible){
        pointerBool = 'cursor'
    }

    
    return (
        <>
             {/* Mobile Drawer */}                    
             <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: alpha(theme.palette.background.default, 0),
                        borderRight: '1px solid',
                        borderColor: 'border',
                        opacity: 1,
                        backdropFilter: "blur(64px)", 
                    }
                }}
                sx={{
                    
                    display: {xs: 'block',  },
                    justifyContent: 'center',
                    '& .MuiDrawer-paper': { width: {xs: '100%', md: '900px'},    },
                    }}
                variant="temporary"
                open={mobileOpen}
                disableBackdropTransition
                onClose={handleDrawerToggle}
                anchor="left"
            >

                {/* APP BAR */}
                <AppBar 
                    position="sticky" 
                    elevation={0}
                    sx={{zIndex: '1000', backgroundColor: alpha(theme.palette.background.default, 0), backdropFilter: "blur(64px)", }} >
                    <Grid sx={{position: 'absolute', width: '100%', }}>
                    
                    {
                        isPageVisible && (
                        <motion.div
                        layout
                        style={{width: '100%', zIndex: '1501', position: ''}}
                        initial={{  x: '50%'}}
                        animate={{
                            x:0,
                            transition: { duration: 0.3, ease: easeEntry},
                        }}
                        exit={{
                            x: '100%',
                            transition: { duration: 0.2, ease: easeExit },
                        }}
                        >
                            <Typography align="center" sx={{zIndex: '1501', my:1, fontWeight: ''}}  color={"text.primary"} variant={"h6"} >
                                {title}
                            </Typography> 
                        </motion.div>
                        )
                    }
                
                    
                    </Grid>

                    <Grid sx={{backgroundColor: 'inherit', position: 'sticky'}}>

                        {/* Controller */}

                        <motion.div
                            layout
                            transition={{layout: { duration: 0.3, ease: easeEntry,}}}
                            layoutId="text" style={{zIndex: '1500'}}>
                        

                            <Grid sx={{display: 'flex', alignItems: 'center'}} >

                                
                                <Grid sx={{display: 'flex', alignItems: 'center', cursor: pointerBool, width: '100%'}}
                                    onClick={() => {
                                        if(isPageVisible){
                                        setPageVisible(false)
                                        setIsProfileVisible(false)  
                                        setIsBluetoothVisible(false)
                                        setIsHomeVisible(true) 
                                        setIsWifiVisible(false)
                                        handleText(theme.typography.h4.fontSize, 'Settings', theme.palette.text.main)
                                        } 
                                    }}
                                >
                                    { 
                                        isPageVisible && (
                                            <>
                                                <motion.div 
                                                initial={{opacity: 0, x: 50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{ duration: 0.2, ease: easeEntry,}}
                                                style={{display: 'flex',  alignItems: 'center'}}>
                                                    <ArrowBackIosIcon sx={{my:1, ml: 3}} fontSize="xs" color="primary"/> 
                                                </motion.div>
                                            </>
                                        )
                                        
                                    }
                                
                                    <Grid sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                        <Typography sx={{my:1, ml: marginLeft, transitionTimingFunction: theme.transitions.easing.easeIn, transition: 'color 0.3s, font-size 0.3s', fontSize: `${size}`, color: `${color}`}}  >
                                            Settings
                                        </Typography>
                                        
                                        {
                                            isHomeVisible && (
                                                <IconButton
                                                sx={{mr:3}}
                                                    disableRipple
                                                    color="inherit"
                                                    aria-label="open drawer"
                                                    edge="start"
                                                    onClick={() => {
                                                        setMobileOpen(false)
                                                    }}
                                                >
                                                    <CloseIcon sx={{':hover': {color: 'primary.main'}}} />
                                                </IconButton>
                                            )
                                        }
                                    </Grid>
                                                                
                                </Grid>

                            </Grid>

                        </motion.div>
                    
                    </Grid>
                </AppBar>
                
                <Grid sx={{width: '100%',  display: 'flex'}} >
            
            
                <Grid sx={{ position: 'absolute', p:3, width: '100%', backdropFilter: "blur(64px)", }}>

                
                <AnimatePresence >
                {isHomeVisible && (
                        
                    <motion.div
                        layout
                        key="buttons"
                        initial={{opacity: 0, scale: 0.8, x: -100 }}
                        animate={{
                            x: 0,
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.3, ease: easeEntry},
                          }}
                          exit={{
                            scale: 0.8,
                            x: -50,
                            opacity: 0.3,
                            transition: { duration: 0.2, ease: easeExit, opacity: 0.2  },
                          }}
                        transition={{layout: { duration: 0.3, ease: easeExit }}}
                    >
                       

                        {/* PROFILE */}

                        <Grid 
                        onClick={() => {
                            setIsProfileVisible(true)  
                            setIsHomeVisible(false)
                            handleText(theme.typography.h6.fontSize, 'Apple ID', theme.palette.primary.main)
                            setPageVisible(true)                                
                        }}
                        sx={{display: 'flex', backgroundColor: 'background.paper', mb: 3, borderRadius: '12px', p:1, alignItems: 'center', cursor: 'pointer', 
                            ":hover": {
                            backgroundColor: alpha(theme.palette.background.paper, 0.5),
                            transition: 'ease-in-out 0.2s',}}}>

                                <Avatar sx={{ ml: 2, width: 56, height: 56 }}>S</Avatar>
                                <Grid sx={{ml: 2}}>
                                    <Typography variant="h6">Stephen</Typography>
                                    <Typography variant="body2">Apple ID, iCloud+, Media & Purchases</Typography>
                                </Grid>

                                <Grid sx={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                                    <ArrowForwardIos sx={{mr: 2}} />
                                </Grid>
                        </Grid>


                        {/* Wifi */}

                        <StyledButton 
                            sx={{width: '100%'}}
                            disableRipple
                            onClick={() => {
                                setIsWifiVisible(true)  
                                setIsHomeVisible(false)
                                handleText(theme.typography.h6.fontSize, 'Wi-Fi', theme.palette.primary.main)
                                setPageVisible(true)                                
                                
                            }}
                            >
                                Wi-Fi
                                <ArrowForwardIos sx={{justifySelf: 'end'}}/>
                        </StyledButton>


                        {/* Bluetooth */}

                        <StyledButton 
                            disableRipple
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsBluetoothVisible(true) 
                                setIsHomeVisible(false)
                                handleText(theme.typography.h6.fontSize, 'Bluetooth', theme.palette.primary.main)
                                setPageVisible(true)                             
                            }}
                            >
                                Bluetooth
                            <ArrowForwardIos/>
                        </StyledButton>


                    </motion.div>
                   )}
                   </AnimatePresence>
                </Grid>
                

                {/* Pages */}
              
                <Wifi isWifiVisible={isWifiVisible}/>
                <Profile isProfileVisible={isProfileVisible}/>
                <Bluetooth isBluetoothVisible={isBluetoothVisible}/>
                

            </Grid>
                   
              
            </Drawer> 
        </>
    )

}
export default SideDrawer