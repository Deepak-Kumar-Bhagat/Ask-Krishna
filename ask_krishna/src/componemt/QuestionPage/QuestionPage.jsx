import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../LandingPage/Footer'
import floral from '../../images/floral-decor.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Stack } from '@mui/system';
import '../../css/universal.css';

function QuestionPage() {

  const [input,setinput]=useState();

  return (
    <div>
        <div className='background'> 
        {/* About Us Section */}
        <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 20px",background:"transparent"}}>
            <Box sx={{padding:"3%",textAlign:"center"}}>
               <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>Ask Question</Typography>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>
                
                <Box sx={{marginTop:"30px"}}>
                <TextField onChange={(e)=>{setinput(e.target.value)}} value={input} variant="standard" placeholder="Search by Phone" 
                    sx={{boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"10px 0px 0px 10px",border:'1px solid #a04e4e',width:"30%",padding:"5px"}}
                    InputProps={{disableUnderline: true,startAdornment: <SearchRoundedIcon sx={{ color: "#a04e4e", margin: 1 }}/>}}/>
                <Button variant="contained"
                    sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)",border:"1px solid #a04e4e",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"0px 10px 10px 0px"}}>
                    <Box sx={{ textTransform: "capitalize",margin:"7px"}}>Search</Box>
                </Button>
                </Box>

                <Stack direction="row" spacing={6} sx={{marginTop:"70px",padding:"0% 5%"}}>
                    <Stack justifyContent="center" alignItems="center" className="navbar" sx={{backgroundColor:"rgb(160,78,78)",width:"150px",height:"100px",borderRadius:"15px",cursor:"pointer","&:hover":{boxShadow:"5px 5px 10px rgb(201,164,112)"}}}>
                        <Typography sx={{fontSize:"22px",color:'rgb(240,227,227)',fontFamily: 'Helvetica',fontWeight:"540",letterSpacing:"0.3rem"}}>Anger</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    </div>

    {/* Footer Section */}
    <Footer/>
    </div>
  )
}

export default QuestionPage