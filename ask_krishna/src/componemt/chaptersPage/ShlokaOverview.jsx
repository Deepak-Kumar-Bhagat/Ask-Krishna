import React from 'react'
import Navbar from '../LandingPage/Navbar'
import floral from '../../images/floral-decor.png';
import Footer from '../LandingPage/Footer';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ShlokaOverview() {
  return (
    <div>
        <Navbar/>
        <div className='background'>
            <Box sx={{border:"1px solid red",textAlign:"center",padding:"3% 5%"}}>

                <Stack direction="row" justifyContent="space-between">
                    <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <ArrowBackIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                   <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"30px",color:"#a04e4e"}}>C H A P T E R  1</Typography>
                   <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <ArrowForwardIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                </Stack>

                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>

                <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"25px",letterSpacing:"4px",marginBottom:"20px"}}>VERSE 1</Typography>
                <Typography sx={{color:"#666666",fontFamily: 'Raleway',fontSize:"23px",marginBottom:"20px"}}>श्रीभगवानुवाच |इमं विवस्वते योगं प्रोक्तवानहमव्ययम् |विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ॥1॥</Typography>
                
                <Stack sx={{justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
                    <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                        <FavoriteBorderIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                </Stack>

                <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"10px",letterSpacing:"4px",textDecoration:'underline'}}>Transliteration</Typography>
                <Typography sx={{color:"#666666",fontFamily: 'Noto Serif',fontSize:"23px",marginBottom:"40px",fontStyle:"italic"}}>śhrī bhagavān uvāchaimaṁ vivasvate yogaṁ proktavān aham avyayamvivasvān manave prāha manur ikṣhvākave ’bravīt</Typography>

                <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"10px",letterSpacing:"4px",textDecoration:'underline'}}>Word Meanings</Typography>
                <Typography sx={{color:"#666666",fontFamily:'Noto Serif',fontSize:"23px",marginBottom:"40px",fontStyle:"italic"}}>śhrī-bhagavān uvācha—the Supreme Lord Shree Krishna said; imam—this; vivasvate—to the Sun-god; yogam—the science of Yog; proktavān—taught; aham—I; avyayam—eternal; vivasvān—Sun-god; manave—to Manu, the original progenitor of humankind; prāha—told; manuḥ—Manu; ikṣhvākave—to Ikshvaku, first king of the Solar dynasty; abravīt—instructed</Typography>

                 <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"10px",letterSpacing:"4px",textDecoration:'underline'}}>Translation</Typography>
                <Typography sx={{color:"#666666",fontFamily: 'Raleway',fontSize:"23px",marginBottom:"40px"}}>The Blessed Lord said: I imparted this imperishable Yoga to Vivasvan(Sun-God), Vivasvan taught this to Manu, and Manu transmitted this to Iksavaku.</Typography>

                <Stack direction="row" justifyContent="space-between">
                    <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <ArrowBackIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                   <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <ArrowForwardIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                </Stack>

            </Box>
        </div>
        {/* Footer Section */}
        <Footer/>
    </div>
  )
}

export default ShlokaOverview