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

function Dashboard() {
  const navigate= useNavigate();
  const [temp,settemp]=useState([1,2,3,4,5,6]);

  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",height:"auto",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",border:"1px solid red"}}>
                    <MainSidebar/>
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
                    {temp.map((ele)=>{
                        return(
                            <Stack direction="row" justifyContent="space-between" sx={{width:"400px",height:"150px",borderRadius:"10px",boxShadow:"5px 5px 10px rgb(201,164,112)",backgroundColor:"rgb(227,217,191,0.6)",cursor:"pointer",margin:"20px"}}>
                                <Stack justifyContent="center" alignItems="" sx={{marginLeft:"25px"}}>
                                    <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"22px",color:"rgb(72,67,56)",letterSpacing: '.2rem'}}>C H A P T E R 1</Typography>
                                    <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontWeight:"550",fontSize:"18px",letterSpacing:"4px"}}>Karma Yoga</Typography>
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