import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../LandingPage/Footer'
import floral from '../../images/floral-decor.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Stack } from '@mui/system';
import '../../css/universal.css';

function QuestionPage() {

  const [input,setinput]=useState();
  const [temp,setTemp]=useState(["Anger","Depression","Greed","Practicing Forgiveness","Confusion","Discriminated","Laziness","Pride","Dealing With Envy","Fear","Loneliness","Seeking Peace","Death of a Loved one","Feeling Sinful","Losing Hope","Temptation","Demotivated","Forgetfulness","Lust","Uncontrolled Mind"]);

  return (
    <div>
        <div className='background'> 
        {/* Ask Question Section */}
        <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 20px",background:"transparent"}}>
            <Box sx={{padding:"3%",textAlign:"center"}}>
               <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>Ask Question</Typography>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>
                
                <Box sx={{marginTop:"30px"}}>
                <TextField onChange={(e)=>{setinput(e.target.value)}} value={input} variant="standard" placeholder="Please Type Keyword" 
                    sx={{boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"10px 0px 0px 10px",border:'1px solid #a04e4e',width:"30%",padding:"5px"}}
                    InputProps={{disableUnderline: true,startAdornment: <SearchRoundedIcon sx={{ color: "#a04e4e", margin: 1 }}/>}}/>
                <Button variant="contained"
                    sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)",border:"1px solid #a04e4e",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"0px 10px 10px 0px"}}>
                    <Box sx={{ textTransform: "capitalize",margin:"7px"}}>Search</Box>
                </Button>
                </Box>

                <Stack direction="row" justifyContent="center" sx={{marginTop:"70px",padding:"0% 3%",display:"flex",flexWrap:"wrap",border:"1px solid red"}}>
                    {temp.map((ele)=>{
                        return(
                           <Stack justifyContent="center" alignItems="center" className="navbar" sx={{backgroundColor:"rgb(160,78,78)",margin:"15px",width:"300px",height:"120px",borderRadius:"15px",cursor:"pointer","&:hover":{boxShadow:"5px 5px 10px rgb(201,164,112)"}}}>
                                <Typography sx={{fontSize:"22px",color:'rgb(240,227,227)',fontFamily: 'Helvetica',fontWeight:"540",letterSpacing:"0.3rem"}}>{ele}</Typography>
                            </Stack>
                        )
                    })}
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