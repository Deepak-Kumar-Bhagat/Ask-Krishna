import React from 'react'
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import krishnalogo from '../../images/krishnaimage1.png';
import krishnalogo1 from '../../images/krishnaimage2.png';
import { Button, Input, Stack, TextField, Typography } from '@mui/material'; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../../css/universal.css';
import krishnalogo3 from '../../images/krishnalogo.png';
import { Link } from "react-scroll";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing()
}));

function Home() {
  return (
    <div>  
      <Navbar/>
      <div className='background'>
        <Box sx={{}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <img src={krishnalogo} style={{width:"100%",paddingTop:"40px"}}></img>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 40px",background:"transparent"}}>
                    <Box sx={{padding:"8%",boxShadow:"0px 0px 5px gray"}}>
                    <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540"}}>Ask Krishna</Typography>
                    <Box sx={{width:'115px',margin:"2px 35px 13px 35px",border:"2px solid #a04e4e"}}></Box>
                    <Typography sx={{color:"#666666",fontFamily: 'Raleway',fontSize:"18px"}}>Ask any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat Geeta.</Typography>
                    <Box>
                        <Button variant="contained" size="medium"  sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"30px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}>Explore<KeyboardArrowRightIcon/></Button>
                    </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
       
         <Box id="About" className="" sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",backgroundColor:"rgb(227,217,191,0.4)"}}>
                    <Box sx={{padding:"4%",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
                    <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>About</Typography>
                    <Box sx={{width:'115px',margin:"5px auto",border:"2px solid #a04e4e"}}></Box>
                    <Typography >Ask any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat</Typography>
                    </Box>
                </Box>
        </Box>
        <Box id="Contact Us" sx={{}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <img src={krishnalogo1} style={{width:"100%",margin:"100px 40px 0px 80px"}}></img>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 40px",background:"transparent"}}>
                    <Box sx={{padding:"8%",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
                    <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.2rem"}}>Contact Us</Typography>
                    <Box sx={{width:'115px',margin:"5px auto",border:"2px solid #a04e4e"}}></Box>
                     <form>
                    <Box className="contactbox" sx={{display:"flex",justifyContent:"center",margin:"20px 0px 0px 0px"}}>
                      <Stack directio="col" spacing={4} sx={{width:"600px"}}>
                        <TextField variant="standard" color="error" focused placeholder="Name *" required type="string" sx={{Color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Email *" required type="email" sx={{color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Message *" required type="string" sx={{color:'#ff8c00'}} />
                      <Box>
                        <Button variant="contained" size="medium"  sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}>Send Message</Button>
                    </Box> 
                    </Stack>
                    </Box>
                    </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>

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

        </Box>
      </div>
    </div>
  )
}

export default Home