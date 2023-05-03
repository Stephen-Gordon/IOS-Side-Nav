import { Drawer } from "@mui/material"
import { alpha } from "@mui/material"
import { useState } from "react";



import { AppBar, Grid, Typography } from "@mui/material";

import styled from "@emotion/styled";

import Button from '@mui/material/Button';
import { AnimatePresence, motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PrimaryPage from "./PrimaryPage";
import Background from "./Background";




const SideDrawer = ({theme}) => {
    

    
    const StyledButton = styled(Button)({
        '&.MuiButtonBase-root-MuiTab-root,': {
            '&:hover, &.Mui-hovered': {
                backgroundColor: theme.palette.background.paper,
            },
            '&.Mui-selected': {
                backgroundColor: theme.palette.background.paper,
                width: '100%',
                color: theme.palette.text.primary,
            },
            transition: 'ease-in-out 0.2s',
            width: '100%',
            alignItems: 'start',
            textTransform: 'none',
            color: theme.palette.text.primary,
            fontSize: '20px',
            fontWeight: '400',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '24px',
            paddingRight: '24px',
            borderRadius: '12px',
            
            backgroundColor: theme.palette.background.default,
            '&:hover, &.Mui-hovered': {
                transition: 'ease-in-out 0.2s',
                backgroundColor: theme.palette.background.paper,
                '@media (hover: none)': {
                backgroundColor: 'transparent'
                },
            },
        }
    });
    console.log(theme.transitions.easing)
    const [mobileOpen, setMobileOpen] = useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [isVisible, setIsVisible] = useState(true);
        	
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
    const [isPrimaryVisible, setIsPrimaryVisible] = useState(false);
    const [isThemeVisible, setIsThemeVisible] = useState(false);
    const [isTypographyVisible, setIsTypographyVisible] = useState(false);
    const [isPageVisible, setPageVisible] = useState(false)

    const [renderController, setRenderController] = useState(true);
    console.log(theme.palette)
    const [size, setSize] = useState(theme.typography.h4.fontSize);
    const [title, setTitle] = useState('Controller');
    const [color, setColor] = useState(theme.palette.text.primary);
    const [timing, setTiming] = useState(theme.transitions.easing.easeOut)
    const handleText = (size, title, color) => {
        setSize(size)
        setTitle(title)
        setColor(color)
    }

    let easeEntry = [0.8, 0.1, 0.2, 0.9]
    let easeExit = [0.71, 0.03, 0.56, 0.95]

    let marginLeft = 0;
    if(renderController){
        marginLeft = 3
    }
    
    let pointerBool = 'pointer';
    if(renderController){
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
                    
                    display: {xs: 'block', md: 'none' },
                    justifyContent: 'center',
                    '& .MuiDrawer-paper': { width: '100%' },
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
                    sx={{zIndex: '1000', backgroundColor: alpha(theme.palette.background.default, 0), backdropFilter: "blur(64px)", height: '67px'}} >
                    <Grid sx={{position: 'absolute', width: '100%'}}>
                    
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
                                        setTiming(theme.transitions.easing.easeInOut)
                                        setRenderController(true) 
                                        setIsBackgroundVisible(false)
                                        setIsPrimaryVisible(false)
                                        setPageVisible(false)
                                        setIsThemeVisible(false)
                                        setIsTypographyVisible(false)
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
                                            renderController && (
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
                                                    <CloseIcon />
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
                {renderController && (
                        
                    <motion.div
                        layout
                        key="Codn"
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
                        transition={{layout: { duration: 0.3, ease: easeExit,}}}
                    >
                       

                        
                        


                        {/* Background */}
                        <StyledButton 
                            sx={{width: '100%'}}
                            disableRipple
                            onClick={() => {
                                setIsBackgroundVisible(true)  
                                setRenderController(false)
                                handleText(theme.typography.h6.fontSize, 'Wi-Fi', theme.palette.primary.main)
                                setPageVisible(true)                                
                                
                            }}
                            >
                                Wi-Fi
                        </StyledButton>


                        {/* Primary */}
                        <StyledButton 
                            disableRipple
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsPrimaryVisible(true) 
                                setRenderController(false)
                                handleText(theme.typography.h6.fontSize, 'Primary', theme.palette.primary.main)
                                setPageVisible(true)                             
                            }}
                            >
                                Primary
                        </StyledButton>


                    </motion.div>
                   )}
                   </AnimatePresence>
                </Grid>
                
              
                <Background isBackgroundVisible={isBackgroundVisible}/>

                <PrimaryPage isPrimaryVisible={isPrimaryVisible}/>
          
                
                <AnimatePresence>
                {isThemeVisible && (
               
                        <motion.div 
                            sx={{width: '100%'}}
                            style={{width: '100%'}}
                            initial={{ x: "100%" ,  scale: 0.8}}
                            animate={{
                                x: 0,
                                scale: 1,
                                transition: { duration: 0.3, ease: easeEntry},
                            }}
                            exit={{
                                x: "100%",
                                opacity: 0,
                                transition: { duration: 0.2, ease: [0.1, 0.8, 0.9, 0.2], opacity: 0.2 },
                            }}
                            
                        
                        > 
                        <p>theme accordian</p>
                    </motion.div>
          
                )}
                </AnimatePresence>
            
            </Grid>
                   
              
            </Drawer> 
        </>
    )

}
export default SideDrawer