import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../Navbar'
import floral from '../../../images/floral-decor.png';

function chapterMainPage() {
  return (
    <div>
        <Navbar/>
        <div className='background'>
            <Box sx={{border:"1px solid red",textAlign:"center",padding:"3% 5%"}}>
                <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"30px",color:"#a04e4e"}}>C H A P T E R  1</Typography>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>
                <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"10px",letterSpacing:"4px"}}>Karma yoga</Typography>
                <Typography sx={{color:"#666666",fontFamily: 'Raleway'}}>Ask any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and </Typography>
            </Box>
        </div>
    </div>
  )
}

export default chapterMainPage