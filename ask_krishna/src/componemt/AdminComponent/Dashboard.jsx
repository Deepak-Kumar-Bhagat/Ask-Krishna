import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import MainSidebar from './MainSidebar'
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Footer from '../LandingPage/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Apiaddress } from '../../utility';

function Dashboard() {

  const navigate= useNavigate();
  const [chapterList,setChapterList]=useState([]);

  const fetchChapterList=async ()=>{
    try{
      const url=Apiaddress + "/chapter/chaptercount";
      const res = await axios.get(url, {});
      setChapterList(res?.data?.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchChapterList();
  },[])

  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",height:"auto",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",boxShadow:"5px 5px 5px rgb(201,164,112)"}}>
                    <MainSidebar active={"Chapter Directory"}/>
                </Stack>
                <Stack sx={{width:"80%",height:"100vh",overflowY:"scroll"}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{margin:"40px 30px"}}>
                        <Stack>
                            <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"25px",color:"#a04e4e"}}>Chapter Directory</Typography>
                            <Typography sx={{fontFamily: 'Raleway',fontWeight: 500,letterSpacing: '.1rem',color: 'orange',textDecoration: 'none',fontSize:"14px"}}>
                             List of Chapters in Bhagwat Geeta
                            </Typography>
                        </Stack>
                        <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}}>
                            <Box sx={{ textTransform: "capitalize" }}
                            onClick={(e)=>{
                              navigate('/project-add')
                            }}
                            >Add Chapter</Box>
                            <AddIcon fontSize="small" />
                        </Button>
                    </Stack>
                    
                    <Stack direction="row" justifyContent="center" sx={{dispaly:"flex",flexWrap:"wrap",MaxHeight:"100vh",padding:"3% 0%"}}>
                    {chapterList.map((ele)=>{
                        return(
                            <Stack direction="row" justifyContent="space-between" sx={{width:"400px",height:"150px",borderRadius:"10px",boxShadow:"5px 5px 10px rgb(201,164,112)",backgroundColor:"rgb(227,217,191,0.6)",cursor:"pointer",margin:"20px"}}>
                                <Stack justifyContent="center" alignItems="" sx={{marginLeft:"25px",width:"80%"}}>
                                    <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"22px",color:"rgb(72,67,56)",letterSpacing: '.2rem'}}>{`C H A P T E R ${ele.chapterNo}`}</Typography>
                                    <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontWeight:"550",fontSize:"18px",letterSpacing:"4px"}}>{ele.chapterName}</Typography>
                                </Stack>
                                <Stack justifyContent="center" alignItems="center" spacing={1.5} sx={{backgroundColor:"#a04e4e",width:"20%",borderRadius:"0px 10px 10px 0px"}}>
                                    <RemoveRedEyeIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}/>
                                    <EditIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}
                                    onClick={()=>{
                                        navigate('/chapter-edit')
                                    }}
                                    />
                                    <DeleteIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}/>
                                </Stack>
                            </Stack>
                        )
                    })}
                    </Stack>

                </Stack>
            </Stack>
            {/* Footer Section */}
            <Footer/>
        </div>
    </div>
  )
}

export default Dashboard