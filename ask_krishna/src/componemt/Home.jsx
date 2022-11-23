import React from 'react'
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import krishnalogo from '../images/krishnaimage1.png';
import krishnalogo1 from '../images/krishnaimage2.png';
import { Button, Input, Stack, TextField, Typography } from '@mui/material'; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../css/universal.css';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing()
}));

function Home() {
  return (
    <div>  
        <Navbar/>
      <div className='background'>
        <Box sx={{backgroundColor:"rgba(248, 250, 252,.7)"}}>
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
         <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",backgroundColor:"rgba(248, 250, 252,.9)"}}>
                    <Box sx={{padding:"4%",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
                    <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>About</Typography>
                    <Box sx={{width:'115px',margin:"5px auto",border:"2px solid #a04e4e"}}></Box>
                    <Typography sx={{color:"#666666",fontFamily: 'Raleway',fontSize:"18px",marginTop:"30px"}}>Ask any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat</Typography>
                    </Box>
                </Box>
        </Box>
        <Box sx={{backgroundColor:"rgba(248, 250, 252,.7)"}}>
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
        </Box>
      </div>
    </div>
  )
}

export default Home