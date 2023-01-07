import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation, useNavigate } from 'react-router-dom';
import MainSidebar from '../MainSidebar';
import Footer from '../../LandingPage/Footer';
import axios from 'axios';
import { Apiaddress } from '../../../utility';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SlokaList() {
  const navigate= useNavigate();
  const {state}=useLocation();
  const {verse}=state;

  const [sloka,setSlokaList]=useState([]);

   const getChapterSlokaList=async ()=>{
    try{
      let temp=[];
      for(let i=0;i<verse.length;i++){
        const url=Apiaddress + "/sloka/"+verse[i];
        const res = await axios.get(url, {});
        console.log(res?.data?.data[0]);
        temp.push(res?.data?.data[0]);
      }
      setSlokaList(temp);
    }catch(err){
      console.log(err);
    }
    }

  useEffect(()=>{
    getChapterSlokaList();
  },[])

  const [curpage, setcurpage] = useState(1);
  const [pageRange, setPageRange] = useState([0, 6]);

  const nextClick = () => {
    if (
      !(sloka.length >= pageRange[0] && sloka.length <= pageRange[1])
    ) {
      setcurpage(curpage + 1);
      setPageRange([pageRange[0] + 6, pageRange[1] + 6]);
    }
  };

  const prvClick = () => {
    if (pageRange[0] != 0 && pageRange[1] != 6) {
      setcurpage(curpage - 1);
      setPageRange([pageRange[0] - 6, pageRange[1] - 6]);
    }
  };

  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (sloka) {
      let arr = [];
      for (
        let i = 1;
        i <=
        (sloka.length % 6 == 0
          ? sloka.length / 6
          : sloka.length / 6 + 1);
        i++
      ) {
        arr.push(i);
      }
      setPages(arr);
    }
  }, [sloka]);

  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",height:"auto",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",boxShadow:"5px 5px 5px rgb(201,164,112)"}}>
                    <MainSidebar active={"Verse Directory"}/>
                </Stack>
                <Stack sx={{width:"80%",height:"100vh",overflowY:"scroll"}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{margin:"40px 30px"}}>
                        <Stack>
                            <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"25px",color:"#a04e4e"}}>Verse Directory</Typography>
                            <Typography sx={{fontFamily: 'Raleway',fontWeight: 500,letterSpacing: '.1rem',color: 'orange',textDecoration: 'none',fontSize:"14px"}}>
                             List of Verses of Chapter 2 in Bhagwat Geeta
                            </Typography>
                        </Stack>
                        <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}}>
                            <Box sx={{ textTransform: "capitalize" }}
                            onClick={(e)=>{
                              navigate('/sloka-add')
                            }}
                            >Add Verse</Box>
                            <AddIcon fontSize="small" />
                        </Button>
                    </Stack>
                    
                    <Stack direction="row" justifyContent="center" sx={{dispaly:"flex",flexWrap:"wrap",MaxHeight:"100vh",padding:"3% 0%"}}>
                    {sloka?.map((ele,index)=>{
                        if (index >= pageRange[0] && index <= pageRange[1]) {
                        return(
                            <Stack direction="row" justifyContent="space-between" sx={{width:"400px",height:"150px",borderRadius:"10px",boxShadow:"5px 5px 10px rgb(201,164,112)",backgroundColor:"rgb(227,217,191,0.6)",cursor:"pointer",margin:"20px"}}>
                                <Stack justifyContent="center" alignItems="" sx={{marginLeft:"25px"}}>
                                    <Typography sx={{fontFamily:"Helvetica",fontWeight:"550",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing: '.2rem'}}>{`V E R S E ${ele?.verseNo}`}</Typography>
                                    <Typography sx={{color:"rgb(72,67,56)",fontFamily:'Raleway',fontSize:"14px",marginRight:"1%"}}>{ele?.translation.substring(0, 100)+"..."}</Typography>
                                </Stack>
                                <Stack justifyContent="center" alignItems="center" spacing={1.5} sx={{backgroundColor:"#a04e4e",width:"170px",borderRadius:"0px 10px 10px 0px"}}>
                                    <RemoveRedEyeIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}/>
                                    <EditIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}
                                    // onClick={()=>{
                                    //     navigate('/chapter-edit')
                                    // }}
                                    />
                                    <DeleteIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}/>
                                </Stack>
                            </Stack>
                        )}
                    })}
                    </Stack>

                    <Box sx={{ display: "flex", justifyContent: "center",marginBottom:"30px"}}>
                        {sloka.length!=0 && 
                            <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}}
                                onClick={prvClick}>
                                <ArrowBackIosIcon fontSize="small" />
                                <Box sx={{ textTransform: "capitalize" }}>Previous</Box>
                            </Button>}

            <Box sx={{background: "#E3E4EB",display: "flex",placeItems: "center",margin: " 0 10px",borderRadius: "5px"}}>
                <Box sx={{background: `white`,color: "black",width: "30px",borderRadius: "5px",margin: "0 10px",display: "grid",placeItems: "center"}}>{curpage}</Box>
                <Box sx={{color: "gray",width: "30px",borderRadius: "5px",margin: "0 0px",display: "grid",placeItems: "center"}}>of</Box>
                <Box sx={{background: `#E3E4EB`,color: "gray",width: "30px",borderRadius: "5px",margin: "0 10px",display: "grid",placeItems: "center"}}>{pages?.length}</Box>
            </Box>

            {sloka.length!=0 && 
                <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)",padding:"0px 20px 0px 35px"}}
                    onClick={nextClick}>
                    <Box sx={{ textTransform: "capitalize" }}>Next</Box>
                    <ArrowForwardIosIcon fontSize="small" />
                </Button>
            }
          </Box>

                </Stack>
            </Stack>
            {/* Footer Section */}
            <Footer/>
        </div>
    </div>
  )
}

export default SlokaList