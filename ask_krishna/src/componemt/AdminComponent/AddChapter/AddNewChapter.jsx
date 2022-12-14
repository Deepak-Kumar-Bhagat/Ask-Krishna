import { Button, Modal, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import MainSidebar from '../MainSidebar'
import floral from '../../../images/floral-decor.png';
import RichTextEditor from 'react-rte';
import Footer from '../../LandingPage/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Apiaddress } from '../../../utility';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AddNewChapter() {

    const navigate=useNavigate();

    const {register,handleSubmit,reset,formState: { errors }} = useForm();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [summary,setSummary]=useState("");
    const [summaryHindi,setSummaryHindi]=useState("");
    const [highlight,setHighlight]=useState("");
    const [highlightHindi,setHighlightHindi]=useState("");
    const [tabIndex,setTabIndex]=useState();

    const Tab=["The Chapter Is Created SuccessFull!!","This Chapter Is Already Exist!!"];

    const [editorValue, setEditorValue] = useState(RichTextEditor.createValueFromString(summary, 'html'));
    const [editorValue1, setEditorValue1] = useState(RichTextEditor.createValueFromString(summaryHindi, 'html'));
    const [editorValue2, setEditorValue2] = useState(RichTextEditor.createValueFromString(highlight, 'html'));
    const [editorValue3, setEditorValue3] = useState(RichTextEditor.createValueFromString(highlightHindi, 'html'));

    const handleChange1 = value => {
     setEditorValue(value);
     setSummary(value.toString("html"));
    };

    const handleChange2 = value => {
     setEditorValue1(value);
     setSummaryHindi(value.toString("html"));
    };

    const handleChange3 = value => {
     setEditorValue2(value);
     setHighlight(value.toString("html"));
    };

    const handleChange4 = value => {
     setEditorValue3(value);
     setHighlightHindi(value.toString("html"));
    };
    
    const createChapter=async (data,e)=>{
        e.preventDefault();
        try{
            let obj={chapterNo:+(data.chapterNo),chapterName:data.chapterName,chapterNameHindi:data.chapterNameHindi,chapterIntro:data.chapterIntro,chapterIntroHindi:data.chapterIntroHindi,chapterSummary:summary,chapterSummaryHindi:summaryHindi,chapterHighlight:highlight,chapterHighlightHindi:highlightHindi,verse:[]}
            const url=Apiaddress + "/chapter/createchapter";
            const res = await axios.post(url, obj);
            console.log(res?.data?.data);
            setTabIndex(0);
            handleOpen();
            // setInterval(function(){handleClose()},3000);
        }
        catch(err){
            console.log(err);
            setTabIndex(1);
            handleOpen();
        }
    }

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
                    <MainSidebar active={"Chapter Directory"}/>
                </Stack>
                <Stack justifyContent="" alignItems="center" sx={{width:"80%",height:"100vh",overflowY:"scroll"}}>
                    <Box sx={{padding:"3%",textAlign:"center"}}>
                        <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>Add Chapter</Typography>
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                            <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                            <img src={floral} style={{width:"20%",paddingTop:"0px"}}></img>
                            <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                        </Box> 
                    </Box>

                    <form onSubmit={handleSubmit(createChapter)} style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <Stack sx={{width:"70%",margin:"2% 0%"}}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter No.</Typography>
                            <TextField 
                                variant="standard" 
                                color="error" 
                                focused 
                                type="number" 
                                sx={{Color:'#ff8c00',width:"60%"}}
                                name="chapterNo"
                                {...register("chapterNo", {
                                required:"Chapter No. is required.",
                                min:{value:1,message:'Chapter No should be greater than or equal to 1'},
                                max:{value:18,message:'Chapter No should be less than or equal to 18'},
                                })}
                                error={Boolean(errors.chapterNo)}
                                helperText={errors.chapterNo?.message}
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter Name</Typography>
                            <TextField 
                                variant="standard"
                                color="error" 
                                focused 
                                type="text" 
                                sx={{Color:'#ff8c00',width:"60%"}}
                                 name="chapterName"
                                {...register("chapterName",{
                                    required:"Chapter Name is required."
                                })}
                                error={Boolean(errors.chapterName)}
                                helperText={errors.chapterName?.message}
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter Name (Hindi)</Typography>
                            <TextField
                                variant="standard"
                                color="error" 
                                focused 
                                type="text" 
                                sx={{Color:'#ff8c00',width:"60%"}}
                                 name="chapterNameHindi"
                                {...register("chapterNameHindi",{
                                    required:"Chapter Name is required."
                                })}
                                error={Boolean(errors.chapterNameHindi)}
                                helperText={errors.chapterNameHindi?.message}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Chapter Introduction</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="chapterIntro"
                                type="text"
                                 {...register("chapterIntro",{
                                    required:"Chapter Introduction is required."
                                })}
                            />
                            {errors.chapterIntro && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>Chapter Introduction is required.</Typography>}
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Chapter Introduction (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                                name="chapterIntroHindi"
                                type="text"
                                {...register("chapterIntroHindi",{
                                    required:"Chapter Introduction is required."
                                })}
                            />
                            {errors.chapterIntroHindi && <Typography sx={{color:"rgb(221,103,99)",fontSize:"12px",marginTop:"5px"}}>Chapter Introduction is required.</Typography>}
                        </Stack>

                            <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                                <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Chapter Summary</Typography>
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
                                <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Chapter Summary (Hindi)</Typography>
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

                             <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                                <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Chapter Highlight</Typography>
                                <RichTextEditor
                                value={editorValue2}
                                onChange={handleChange3}
                                required
                                id="body-text"
                                name="bodyText"
                                type="string"
                                // multiline
                                variant="filled"
                                style={{ minHeight:400}}
                                />
                            </Stack>

                            <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                                <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Chapter Highlight (Hindi)</Typography>
                                <RichTextEditor
                                value={editorValue3}
                                onChange={handleChange4}
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
          {Tab[tabIndex]}
          </Typography>
          <Box>
            {tabIndex==0?
            <Button variant="contained" size="medium"  sx={{letterSpacing:"0.2rem",boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}
            onClick={()=>{navigate(-1)}}
            >OK</Button>
            :
            <Button variant="contained" size="medium"  sx={{letterSpacing:"0.2rem",boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}
            onClick={handleClose}
            >OK</Button>
             }
          </Box> 
        </Box>
      </Modal>
    </div>
  )
}

export default AddNewChapter