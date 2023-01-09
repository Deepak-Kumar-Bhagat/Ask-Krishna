import React, { useEffect, useState } from 'react'
import floral from '../../../images/floral-decor.png';
import Footer from '../../LandingPage/Footer';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import YouTube, { YouTubeProps } from 'react-youtube';
import MainSidebar from '../MainSidebar';
import axios from 'axios';
import { Apiaddress } from '../../../utility';
import { useLocation } from 'react-router-dom';

function ViewSloka() {

   const {state}=useLocation();
   const {chapterNo,chapterName,chapterNameHindi,verseNo,id}=state;

   const [sloka,setSlokaList]=useState([]);
   const [verse,setVerse]=useState();
   const [trigger,setTrigger]=useState(false);

   console.log(sloka);
   console.log(verse);

   const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: "350",
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters 
      autoplay: 0,
    },
  };

  const nextClick = () => {
    if (verse.verseNo!==sloka?.length) {
      setVerse(sloka[(verse?.verseNo+1)-1]);
    }
  };

  const prvClick = () => {
    if (verse.verseNo!==1) {
      setVerse(sloka[(verse?.verseNo- 1)-1]);
    }
  };

  const getChapterSlokaList=async ()=>{
    try{
      const url= Apiaddress + "/chapter/"+chapterNo
      const res = await axios.get(url, {});
      let verse=res?.data?.data[0].verse;
      let temp=[];
      for(let i=0;i<verse.length;i++){
        const url=Apiaddress + "/sloka/"+verse[i];
        const res = await axios.get(url, {});
        // console.log(res?.data?.data[0]);
        temp.push(res?.data?.data[0]);
      }
      setSlokaList(temp);
      setVerse(temp[verseNo-1]);
    }catch(err){
      console.log(err);
    }
    }

  useEffect(()=>{
    getChapterSlokaList();
  },[trigger])


  return (
    <div>
        <div className='background'>
             <Stack direction="row" sx={{width:"100%",height:"auto",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",boxShadow:"5px 5px 5px rgb(201,164,112)"}}>
                    <MainSidebar active={"Verse Directory"}/>
                </Stack>
                <Stack sx={{width:"80%",height:"100vh",overflowY:"scroll"}}>
                    <Box sx={{textAlign:"center",padding:"3% 5%"}}>

                <Stack direction="row" justifyContent="space-between">
                    <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}
                    onClick={prvClick}
                    >
                      <ArrowBackIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                   <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"30px",color:"#a04e4e"}}>{`C H A P T E R  ${chapterNo}`}</Typography>
                   <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}
                   onClick={nextClick}
                   >
                      <ArrowForwardIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                </Stack>

                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>

                <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"25px",letterSpacing:"4px",marginBottom:"20px"}}>{`VERSE ${verse?.verseNo}`}</Typography>

                <Box sx={{margin:"40px 0px",height:"350px"}}>
                  <YouTube videoId="vBJ5HSs-N9o" opts={opts} onReady={onPlayerReady} />
                </Box>

                <Typography sx={{color:"#666666",fontFamily: 'Raleway',fontSize:"23px",margin:"20px 0px"}}>श्रीभगवानुवाच |इमं विवस्वते योगं प्रोक्तवानहमव्ययम् |विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ॥1॥</Typography>
                
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
                    <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}
                    onClick={prvClick}
                    >
                      <ArrowBackIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                   <Box sx={{backgroundColor:"#a04e4e",justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}
                   onClick={nextClick}
                   >
                      <ArrowForwardIcon sx={{fontSize:"30px",color:"white"}}/>
                    </Box>
                </Stack>

            </Box>
                </Stack>
             </Stack>
        </div>
        {/* Footer Section */}
        <Footer/>
    </div>
  )
}

export default ViewSloka