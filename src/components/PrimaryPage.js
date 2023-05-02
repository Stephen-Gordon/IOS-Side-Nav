import { Grid, Typography, Box, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { AnimatePresence, motion } from "framer-motion";

import { alpha } from "@mui/material";



const PrimaryPage = ({isPrimaryVisible}) => {

    return (
        <AnimatePresence>
            {isPrimaryVisible && (
                    
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
                        
       


                <Typography sx={{ml:2, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                    Hue
                </Typography>

                <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                
                    <Grid sx={{width: '100%',}}>
                        <Grid sx={{mb:1}}>
                            <Grid sx={{mb:1}}>
                                <Typography variant={"body2"}   color="text.secondary">
                                    Start
                                </Typography>
                            </Grid>
                            <Stack spacing={2} direction="row"  alignItems="center">
                                    <Typography textAlign="center" color="text.secondary" variant="body1">
                                        0
                                    </Typography>
                                    <Slider
                                        fullWidth
                                        aria-label="Temperature"
                                        min={0}
                                        max={360}
                                        step={10} 
                                        color="primary"
                                    />
                    
                                <Typography color="text.secondary" variant="body1">
                                359
                                </Typography>
                            </Stack>
                        </Grid>
                        
                    
                    </Grid>
                
                </Grid>

        
                    <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                            Saturation
                    </Typography>

                        <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                        
                            <Grid sx={{width: '100%',}}>
                                <Grid sx={{mb:1}}>
                                    <Grid sx={{mb:1}}>
                                        <Typography variant={"body2"}   color="text.secondary">
                                            Start
                                        </Typography>
                                    </Grid>
                                    <Stack spacing={2} direction="row"  alignItems="center">
                                            <Typography textAlign="center" color="text.secondary" variant="body1">
                                                0
                                            </Typography>
                                            <Slider
                                                fullWidth 
                                                min={0}
                                                max={1} 
                                                step={0.01}
                                                color="primary"
                                            />
                            
                                        <Typography color="text.secondary" variant="body1">
                                            1
                                        </Typography>
                                    </Stack>
                                </Grid>
                                
                                <Grid sx={{mb:1, mt:2, borderTop: '1px solid', borderColor: 'border',}}>
                                </Grid>

                                <Grid sx={{mb:1, mt:2}}>
                                    <Typography variant={"body2"}   color="text.secondary">
                                        End
                                    </Typography>
                                </Grid>
                                <Stack spacing={2} direction="row" alignItems="center">
                                <Typography textAlign="center" color="text.secondary" variant="body1">
                                        0
                                    </Typography>
                                    <Slider
                                        fullWidth
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        color="primary"
                                    />
                                    <Typography color="text.secondary" variant="body1">
                                        1
                                    </Typography>
                                </Stack>
                                
                            </Grid>
                        
                        </Grid>
                 


                
                    
                   
                  
                       <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                            Brightness
                        </Typography>

                        <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                          
                            <Grid sx={{width: '100%',}}>
                                <Grid sx={{mb:1}}>
                                    <Grid sx={{mb:1}}>
                                        <Typography variant={"body2"}   color="text.secondary">
                                            Start
                                        </Typography>
                                    </Grid>
                                    <Stack spacing={2} direction="row"  alignItems="center">
                                            <Typography textAlign="center" color="text.secondary" variant="body1">
                                                0
                                            </Typography>
                                            <Slider
                                                fullWidth
                                                min={0}
                                                max={1}
                                                step={0.01}
                                                color="primary"
                                            />
                               
                                        <Typography color="text.secondary" variant="body1">
                                            1
                                        </Typography>
                                    </Stack>
                                </Grid>
                                
                                <Grid sx={{mb:1, mt:2, borderTop: '1px solid', borderColor: 'border',}}>
                                </Grid>

                                <Grid sx={{mb:1, mt:2}}>
                                    <Typography variant={"body2"}   color="text.secondary">
                                        End
                                    </Typography>
                                </Grid>
                                <Stack spacing={2} direction="row" alignItems="center">
                                <Typography textAlign="center" color="text.secondary" variant="body1">
                                        0
                                    </Typography>
                                    <Slider
                                        fullWidth
                                        min={0}
                                        max={1}
                                        step={0.01}                                       
                                        color="primary"
                                    />
                                    <Typography color="text.secondary" variant="body1">
                                        1
                                    </Typography>
                                </Stack>
                                
                            </Grid>
                          
                        </Grid>

                       

                            
                     
                                
                 
       
    </Grid>

    </motion.div>
        )}
        </AnimatePresence>
                   
    )   

}
export default PrimaryPage