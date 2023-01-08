import { Box, Button, Modal, Typography } from '@mui/material'
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
  const {chapterNo,chapterName,chapterNameHindi}=state;

  const [sloka,setSlokaList]=useState([]);
  const [trigger,setTrigger]=useState(false);
  const [chapterToDelete,setChapterToDelete]=useState();
  const [slokaToDelete,setSlokaToDelete]=useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteSloka=async()=>{
    try{
      let obj={chapterNo:chapterToDelete}
      const url=Apiaddress + "/sloka/"+slokaToDelete;
      const res = await axios.post(url,obj);
       console.log(res?.data?.data);
      setTrigger(!trigger);
      handleClose();
    }catch(err){
      console.log(err.message);
    }
  }

   const getChapterSlokaList=async ()=>{
    try{
      const url= Apiaddress + "/chapter/"+chapterNo
      const res = await axios.get(url, {});
      let verse=res?.data?.data[0].verse;
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
  },[trigger])

  const [curpage, setcurpage] = useState(1);
  const [pageRange, setPageRange] = useState([0, 5]);

  const nextClick = () => {
    if (
      !(sloka.length >= pageRange[0] && sloka.length <= pageRange[1])
    ) {
      setcurpage(curpage + 1);
      setPageRange([pageRange[0] + 5, pageRange[1] + 5]);
    }
  };

  const prvClick = () => {
    if (pageRange[0] != 0 && pageRange[1] != 5) {
      setcurpage(curpage - 1);
      setPageRange([pageRange[0] - 5, pageRange[1] - 5]);
    }
  };

  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (sloka) {
      let arr = [];
      for (
        let i = 1;
        i <=
        (sloka.length % 5 == 0
          ? sloka.length / 5
          : sloka.length / 5 + 1);
        i++
      ) {
        arr.push(i);
      }
      setPages(arr);
    }
  }, [sloka]);
  
   const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: '#f6f0e4',
        border: '2px solid #d4ad76',
        borderRadius:"20px",
        boxShadow: 24,
        textAlign:"center",
        p: 4,
    };

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
                            {`List of Verses of Chapter ${chapterNo} in Bhagwat Geeta`}
                            </Typography>
                        </Stack>
                        <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}}>
                            <Box sx={{ textTransform: "capitalize" }}
                            onClick={(e)=>{
                              navigate('/sloka-add',{state:{chapterNo:chapterNo,chapterName:chapterName,chapterNameHindi:chapterNameHindi}})
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
                                    onClick={()=>{
                                        navigate('/sloka-edit',{state:{chapterNo:chapterNo,chapterName:chapterName,chapterNameHindi:chapterNameHindi,verseNo:ele.verseNo,id:ele._id}})
                                    }}
                                    />
                                    <DeleteIcon sx={{color:"lightgray",cursor:"pointer","&:hover":{color:"white"}}}
                                      onClick={()=>{handleOpen();setChapterToDelete(ele?.chapterNo);setSlokaToDelete(ele?._id)}}
                                    />
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

         {/* Modal Section */}  
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"20px",fontWeight:"540",letterSpacing:"0.2rem"}}>
            Hare Krishna
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,mb:2,fontFamily:'Raleway',lineHeight:"30px",fontWeight:"500",fontSize:"18px",color:"rgb(72,67,56)",letterSpacing:"2px"}}>
          Are You Really Want To Delete This Sloka?
          </Typography>

          <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
          <Box>
            <Button variant="contained" size="medium"  sx={{letterSpacing:"0.2rem",boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1.5px solid green","&:hover": {backgroundColor: '#a04e4e',color:"white",border:"1.5px solid #a04e4e"}}}
            onClick={deleteSloka}
            >Yes</Button>
          </Box>
          <Box>
            <Button variant="contained" size="medium"  sx={{letterSpacing:"0.2rem",boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1.5px solid red","&:hover": {backgroundColor: '#a04e4e',color:"white",border:"1.5px solid #a04e4e"}}}
            onClick={()=>{handleClose()}}
            >No</Button>
          </Box>
          </Stack>

        </Box>
      </Modal>
    </div>
  )
}

export default SlokaList