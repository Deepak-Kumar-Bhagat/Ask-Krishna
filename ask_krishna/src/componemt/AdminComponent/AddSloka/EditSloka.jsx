import { Box, Button, Typography, TextareaAutosize, TextField, Modal, } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation, useNavigate } from 'react-router-dom';
import MainSidebar from '../MainSidebar';
import Footer from '../../LandingPage/Footer';
import floral from '../../../images/floral-decor.png';
import RichTextEditor from 'react-rte';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CancelIcon from '@mui/icons-material/Cancel';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Apiaddress } from '../../../utility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  

function EditSloka(){
    
    const navigate=useNavigate();

    const {state}=useLocation();
    const {chapterNo,chapterName,chapterNameHindi,verseNo,id}=state;  

    const {register,handleSubmit,reset,formState: { errors }} = useForm();

    const [input,setinput]=useState("");
    const [purport,setPurport]=useState("");
    const [purportHindi,setPurportHindi]=useState("");
    const [editorValue, setEditorValue] = useState(RichTextEditor.createValueFromString(purportHindi, 'html'));
    const [editorValue1, setEditorValue1] = useState(RichTextEditor.createValueFromString(purport, 'html'));
    const [searchKey,setSearchKey]= useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange1 = value => {
     setEditorValue(value);
     setPurportHindi(value.toString("html"));
    };

    const handleChange2 = value => {
     setEditorValue1(value);
     setPurport(value.toString("html"));
    };

    const updateSloka=async (data,e)=>{
        e.preventDefault();
        try{
            let obj={chapterNo:+(chapterNo),chapterName:chapterName,chapterNameHindi:chapterNameHindi,verseNo:+(verseNo),slokSanskrit:data.slokSanskrit,slokEnglish:data.slokEnglish,wordMeaning:data.wordMeaning,wordMeaningHindi:data.wordMeaningHindi,translation:data.translation,translationHindi:data.translationHindi,purport:purport,purportHindi:purportHindi,searchKey:searchKey,videoLink:data.videoLink}
            const url=Apiaddress + "/sloka/updatesloka/"+id;
            const res = await axios.patch(url, obj);
            console.log(res?.data?.data);
            handleOpen();
        }
        catch(err){
            console.log(err);
        }
    }

    const fetchShlokaDetails=async()=>{
        try{
            const url=Apiaddress + "/sloka/"+id;
            const res = await axios.get(url, {});
            reset({ chapterNo:res?.data?.data[0].chapterNo,chapterName:res?.data?.data[0].chapterName,chapterNameHindi:res?.data?.data[0].chapterNameHindi,verseNo:res?.data?.data[0].verseNo,slokSanskrit:res?.data.data[0].slokSanskrit,slokEnglish:res?.data.data[0].slokEnglish,wordMeaning:res?.data?.data[0].wordMeaning,wordMeaningHindi:res?.data?.data[0].wordMeaningHindi,translation:res?.data?.data[0].translation,translationHindi:res?.data?.data[0].translationHindi,videoLink:res?.data?.data[0].videoLink})
            setPurport(res?.data?.data[0]?.purport);
            setPurportHindi(res?.data?.data[0]?.purportHindi);
            setEditorValue(RichTextEditor.createValueFromString(res?.data?.data[0]?.purportHindi, 'html'));
            setEditorValue1(RichTextEditor.createValueFromString(res?.data?.data[0]?.purport, 'html'));
            setSearchKey(res?.data?.data[0]?.searchKey);
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
     if(id){
        fetchShlokaDetails();
     }
    },[]);

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
            <Stack direction="row" sx={{width:"100%",minHeight:"100vh",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",boxShadow:"5px 5px 5px rgb(201,164,112)"}}>
                    <MainSidebar active={"Verse Directory"}/>
                </Stack>
                <Stack justifyContent="" alignItems="center" sx={{width:"80%",height:"100vh",overflowY:"scroll"}}>
                    <Box sx={{padding:"3%",textAlign:"center"}}>
                        <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>Edit Verse</Typography>
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                            <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                            <img src={floral} style={{width:"20%",paddingTop:"0px"}}></img>
                            <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                        </Box> 
                    </Box>

                    <form onSubmit={handleSubmit(updateSloka)} style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <Stack sx={{width:"70%",margin:"2% 0%"}}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter No.</Typography>
                            <Typography sx={{Color:'#ff8c00',width:"60%"}}>{chapterNo}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter Name</Typography>
                            <Typography sx={{Color:'#ff8c00',width:"60%"}}>{chapterName}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter Name (Hindi)</Typography>
                            <Typography sx={{Color:'#ff8c00',width:"60%"}}>{chapterNameHindi}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Verse No.</Typography>
                            <Typography sx={{Color:'#ff8c00',width:"60%"}}>{verseNo}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"60px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Video Link</Typography>
                            <TextField 
                                variant="standard"
                                color="error" 
                                focused 
                                type="text" 
                                sx={{Color:'#ff8c00',width:"60%"}}
                                 name="videoLink"
                                {...register("videoLink",{
                                    required:"Video Link is required."
                                })}
                                error={Boolean(errors.videoLink)}
                                helperText={errors.videoLink?.message}
                            />
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px"}}>Search Key</Typography>
                            <Box sx={{width:"60%"}}>
                                <TextField onChange={(e)=>{setinput(e.target.value.toLowerCase())}} value={input} variant="standard" placeholder="Please Type Keyword" 
                                    sx={{boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"10px 0px 0px 10px",border:'1px solid #a04e4e',width:"70%",padding:"5px"}}
                                    InputProps={{disableUnderline: true,startAdornment: <AddIcon sx={{ color: "#a04e4e", margin: 1 }}/>}}/>
                                <Button variant="contained"
                                    sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)",border:"1px solid #a04e4e",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"0px 10px 10px 0px"}}
                                    onClick={()=>{
                                        if(input==="")return;
                                        setSearchKey([...searchKey,input]);setinput("")}}
                                    >
                                    <Box sx={{ textTransform: "capitalize",margin:"5px 15px",fontSize:"16px"}}>Add</Box>
                                </Button>
                            </Box>
                        </Stack>

                        <Stack direction="row" sx={{height:"150px",overflowY:"scroll",border:"1.5px solid rgb(72,67,56)",marginBottom:"40px",padding:"2%",display:"flex",flexWrap:"wrap"}}>
                         {searchKey?.map((ele,idx)=>{
                            return(
                                <Stack direction="row" justifyContent="center" alignItems="center" sx={{border:"1px solid lightgray",height:"30px",backgroundColor:"rgb(227,217,191,0.6)",borderRadius:"10px",boxShadow:"5px 5px 10px rgb(201,164,112)",margin:"5px"}}>
                                    <Typography sx={{fontSize:"14px",margin:"0px 10px",color:"rgb(72,67,56)"}}>{ele}</Typography>
                                    <CancelIcon sx={{cursor:"pointer",color:"gray",marginRight:"5px","&:hover":{color:"rgb(72,67,56)"}}}
                                    onClick={()=>{
                                       let temp=searchKey?.filter((e,index)=>{
                                           return e!==ele
                                       })
                                       setSearchKey(temp);
                                    }}
                                    />
                                </Stack>
                            )
                         })}
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Shloka (Sanskrit)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="slokSanskrit"
                                type="text"
                                 {...register("slokSanskrit",{
                                    required:"sloka Sanskrit is required."
                                })}
                            />
                            {errors.slokSanskrit && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>sloka Sanskrit is required.</Typography>}
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Shloka (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="slokEnglish"
                                type="text"
                                 {...register("slokEnglish",{
                                    required:"sloka English is required."
                                })}
                            />
                            {errors.slokEnglish && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>sloka English is required.</Typography>}
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Meaning (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="wordMeaningHindi"
                                type="text"
                                 {...register("wordMeaningHindi",{
                                    required:"Word Meaning Hindi is required."
                                })}
                            />
                            {errors.wordMeaningHindi && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>Word Meaning Hindi is required.</Typography>}
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Meaning (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="wordMeaning"
                                type="text"
                                 {...register("wordMeaning",{
                                    required:"Word Meaning is required."
                                })}
                            />
                            {errors.wordMeaning && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>Word Meaning is required.</Typography>}
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Translation (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="translationHindi"
                                type="text"
                                 {...register("translationHindi",{
                                    required:"translation Hindi is required."
                                })}
                            />
                            {errors.translationHindi && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>translation Hindi is required.</Typography>}
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Translation (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="translation"
                                type="text"
                                 {...register("translation",{
                                    required:"translation is required."
                                })}
                            />
                            {errors.translation && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>translation is required.</Typography>}
                        </Stack>
                        
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                                <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Purport (Hindi)</Typography>
                                <RichTextEditor
                                value={editorValue}
                                onChange={handleChange1}
                                id="body-text"
                                name="bodyText"
                                type="string"
                                variant="filled"
                                style={{ minHeight:400}}
                                />
                            </Stack>

                            <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                                <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Purport (English)</Typography>
                                <RichTextEditor
                                value={editorValue1}
                                onChange={handleChange2}
                                required
                                id="body-text"
                                name="bodyText"
                                type="string"
                                // multiline
                                variant="filled"
                                style={{ minHeight:400}}
                                />
                            </Stack>
                           
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}} 
                                onClick={()=>{
                                    navigate(-1);
                                }}
                            >
                                <ArrowBackIcon/>
                                <Box sx={{ textTransform: "capitalize",padding:"3px 25px 3px 3px",fontSize:"16px"}}>Back</Box>
                            </Button>
                        </Box>
                           
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}} type="submit">
                                <Box sx={{ textTransform: "capitalize",padding:"3px 25px",fontSize:"16px"}}>Save</Box>
                            </Button>
                        </Box>
                        </Stack>
                            
                    </Stack>
                    </form>
                </Stack>
            </Stack>
        </div>
        {/* Footer Section */}
        <Footer/>

        {/* Modal Section */}  
        <Modal
        open={open}
        onClose={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"20px",fontWeight:"540",letterSpacing:"0.2rem"}}>
            Hare Krishna
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,mb:2,fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"18px",color:"rgb(72,67,56)",letterSpacing:"2px"}}>
          Shloka Is Updated Successfully!!
          </Typography>
          <Box>
            <Button variant="contained" size="medium"  sx={{letterSpacing:"0.2rem",boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}
            onClick={()=>{navigate(-1)}}
            >OK</Button>
          </Box> 
        </Box>
      </Modal>
    </div>
  )
}

export default EditSloka