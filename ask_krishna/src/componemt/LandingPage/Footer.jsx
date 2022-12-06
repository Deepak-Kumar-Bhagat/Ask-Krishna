import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import krishnalogo3 from '../../images/krishnalogo.png';

function Footer() {
  return (
    <div>
        <Box sx={{backgroundColor:"#d4ad76",padding:"5% 10%"}}>
         <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"#d4ad76"}}>
                   <img src={krishnalogo3} style={{width:"77%",marginTop:"0%"}}></img>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
                <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 0px",background:"transparent"}}>
                  <Box sx={{padding:"0%",textAlign:"left"}}>
                   <Typography sx={{color:"#55503d",fontFamily: 'PT Serif',fontSize:"25px",fontWeight:"540",letterSpacing:"0.2rem",marginBottom:"2%"}}>Ask Krishna.in</Typography>
                   <Typography sx={{color:"#5c5a54",fontFamily: 'Serif',fontSize:"16px"}}>Ask any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in </Typography>
                  </Box>
                </Box>
            </Grid>
        </Grid>
        </Box>

        <Stack justifyContent="center" alignItems="center" sx={{padding:"2% 0%",backgroundColor:"rgba(85,69,47)"}}>
          <Typography sx={{color:"#907d4d"}}><a href='' className="footerLink">Terms & Conditions</a> | <a href='' className="footerLink">Privacy Policy</a> | <a href='' className="footerLink">Cancellation Policy</a></Typography>
          <Typography sx={{color:"#907d4d",marginTop:"0.5%"}}>©2022 Ask Krishna. All rights Reserved.</Typography>
        </Stack>
    </div>
  )
}

export default Footer