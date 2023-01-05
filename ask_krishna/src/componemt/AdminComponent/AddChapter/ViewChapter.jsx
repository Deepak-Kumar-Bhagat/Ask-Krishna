import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../LandingPage/Footer'
import MainSidebar from '../MainSidebar';
import axios from 'axios';
import { Apiaddress } from '../../../utility';
import floral from '../../../images/floral-decor.png';
import ChapterMainSummary from '../../chaptersPage/ChapterMainSummary';
import ChapterMainHighlight from '../../chaptersPage/ChapterMainHighlight';

function ViewChapter() {
   
  const chapterId = useParams().id;
  const [curPage, setCurPage] = useState(1);
  const [chapter, setChapter] = useState({});

  const fetchChapter=async ()=>{
    try{
      const url=Apiaddress + "/chapter/"+chapterId;
      const res = await axios.get(url, {});
      // console.log(res?.data?.data[0]);
      setChapter(res?.data?.data[0]);
    }catch(err){
      console.log(err);
    }
  }

  React.useEffect(()=>{
    fetchChapter();
  },[])

  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",height:"auto",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",boxShadow:"5px 5px 5px rgb(201,164,112)"}}>
                    <MainSidebar active={"Chapter Directory"}/>
                </Stack>
                <Stack justifyContent="" alignItems="center" sx={{width:"80%",padding:"3% 5%"}}>
                  <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"30px",color:"#a04e4e"}}>{`C H A P T E R  ${chapter?.chapterNo}`}</Typography>
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                      <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                      <img src={floral} style={{width:"20%",paddingTop:"0px"}}></img>
                      <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                    </Box> 
                  <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"10px",letterSpacing:"4px"}}>{chapter?.chapterName}</Typography>
                  <Typography sx={{color:"#666666",fontFamily: 'Raleway'}}>{chapter?.chapterIntro}</Typography>

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
                      <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color: curPage==2?"#a04e4e":"rgb(72,67,56)",letterSpacing:"4px"}}>Highlight</Typography>  
                    </Box>
                    </Stack>

                    <Box sx={{width: "100%", margin: "auto",height:"550px",overflowY:"scroll",border:"1.3px solid #a04e4e"}}>
                    {curPage === 1 && (
                      <ChapterMainSummary
                      summary={chapter?.chapterSummary}
                      /> 
                    )}
                    {curPage === 2 && (
                      <ChapterMainHighlight
                      highlight={chapter?.chapterHighlight}
                      />
                    )}
                  </Box>
                  </Box>
                </Stack>
            </Stack>
            {/* Footer Section */}
            <Footer/>
        </div>
    </div>
  )
}

export default ViewChapter