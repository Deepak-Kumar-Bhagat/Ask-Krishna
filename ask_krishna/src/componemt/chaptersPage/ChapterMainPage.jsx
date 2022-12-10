import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Navbar from '../LandingPage/Navbar'
import floral from '../../images/floral-decor.png';
import Footer from '../LandingPage/Footer';
import ChapterMainSummary from './ChapterMainSummary';
import ChapterMainSlokas from './ChapterMainSlokas';
import ChapterMainHighlight from './ChapterMainHighlight';

function ChapterMainPage() {

  const [curPage, setCurPage] = useState(1);

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

                <Box sx={{ width: "90%", margin: "70px auto 25px auto" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box
                      onClick={() => setCurPage(1)}
                      sx={{
                      // background: curPage==1?"white":"#e7e7e7",
                      display: "grid",
                      justifyContent: "center",
                      alignItems:"center",
                      width: "70%",
                      height:"49px",
                      borderRadius:"8px 8px 0px 0px",
                      display:'flex',
                      cursor:"pointer",
                      border: curPage==1?"1.5px solid rgb(160,78,78)":"1px solid rgb(201,164,112)",
                    }}
                      variant="text"
                    >
                      <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color: curPage==1?"#a04e4e":"rgb(72,67,56)",letterSpacing:"4px"}}>Summary</Typography>
                    </Box>
                    <Box
                      onClick={() => setCurPage(2)}
                      sx={{  
                      // background: curPage==2?"white":"#e7e7e7",
                      display: "grid",
                      justifyContent: "center",
                      alignItems:"center",
                      width: "70%",
                      height:"49px",
                      borderRadius:"8px 8px 0px 0px",
                      display:'flex',
                      cursor:"pointer",
                      border: curPage==2?"1.5px solid rgb(160,78,78)":"1px solid rgb(201,164,112)",
                    }}
                      variant="text"
                    >
                      <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color: curPage==2?"#a04e4e":"rgb(72,67,56)",letterSpacing:"4px"}}>Slokas</Typography>  
                    </Box>
                    <Box
                      onClick={() => setCurPage(3)}
                      sx={{ 
                      // background: curPage==3?"white":"#e7e7e7",
                      display: "grid",
                      justifyContent: "center",
                      alignItems:"center",
                      width: "70%",
                      height:"49px",
                      borderRadius:"8px 8px 0px 0px", 
                      display:'flex',
                      cursor:"pointer",
                      border: curPage==3?"1.5px solid rgb(160,78,78)":"1px solid rgb(201,164,112)",
                    }}
                    variant="text"
                    >
                      <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color: curPage==3?"#a04e4e":"rgb(72,67,56)",letterSpacing:"4px"}}>Highlights</Typography>  
                    </Box>
                  </Stack>
                   
                  <Box sx={{width: "100%", margin: "auto",height:"550px",overflowY:"scroll"}}>
                    {curPage === 1 && (
                      <ChapterMainSummary/> 
                    )}
                    {curPage === 2 && (
                      <ChapterMainSlokas/>
                    )}
                    {curPage === 3 && (
                      <ChapterMainHighlight/>
                    )}
                  </Box>

                </Box>
              </Box>
          </div>
          {/* Footer Section */}
          <Footer/>
        </div>
  )
}

export default ChapterMainPage