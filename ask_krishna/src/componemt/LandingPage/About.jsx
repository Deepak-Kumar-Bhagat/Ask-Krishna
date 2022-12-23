import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import floral from '../../images/floral-decor.png';

function About() {
  return (
    <div>
        {/* including Navbar  */}
        {/* <Navbar/> */}
        <div className='background'> 
        {/* About Us Section */}
        <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 20px",background:"transparent"}}>
            <Box sx={{padding:"3%",textAlign:"center"}}>
               <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>About</Typography>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>
                <Typography sx={{color:"#666666",fontFamily:'Raleway',fontSize:"18px",marginTop:"20px"}}>Ask any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat</Typography>  
            </Box>
        </Box>
    </div>

    {/* Footer Section */}
    <Footer/>
    </div>
  )
}

export default About