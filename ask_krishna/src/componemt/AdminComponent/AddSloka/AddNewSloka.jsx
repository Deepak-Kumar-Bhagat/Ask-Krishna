import { Box, Button, Typography, TextareaAutosize, TextField, } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import MainSidebar from '../MainSidebar';
import Footer from '../../LandingPage/Footer';
import floral from '../../../images/floral-decor.png';
import RichTextEditor from 'react-rte';


function AddNewSloka() {
  const [value,setValue]=useState("");
    const [editorValue, setEditorValue] = useState(RichTextEditor.createValueFromString(value, 'html'));
    const [editorValue1, setEditorValue1] = useState(RichTextEditor.createValueFromString(value, 'html'));
    const [editorValue2, setEditorValue2] = useState(RichTextEditor.createValueFromString(value, 'html'));
    const [editorValue3, setEditorValue3] = useState(RichTextEditor.createValueFromString(value, 'html'));

    const handleChange1 = value => {
     setEditorValue(value);
     setValue(value.toString("html"));
    };

    const handleChange2 = value => {
     setEditorValue1(value);
     setValue(value.toString("html"));
    };

    const handleChange3 = value => {
     setEditorValue2(value);
     setValue(value.toString("html"));
    };

    const handleChange4 = value => {
     setEditorValue3(value);
     setValue(value.toString("html"));
    };


  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",minHeight:"100vh",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",border:"1px solid red"}}>
                    <MainSidebar/>
                </Stack>
                <Stack justifyContent="" alignItems="center" sx={{border:"1px solid red",width:"80%",height:"100vh",overflowY:"scroll"}}>
                    <Box sx={{padding:"3%",textAlign:"center"}}>
                        <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>Add Verse</Typography>
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                            <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                            <img src={floral} style={{width:"20%",paddingTop:"0px"}}></img>
                            <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                        </Box> 
                    </Box>
                    <Stack sx={{width:"70%",margin:"2% 0%"}}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter No.</Typography>
                            <TextField variant="standard" color="error" focused  required type="string" sx={{Color:'#ff8c00',width:"60%"}}/>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter Name</Typography>
                            <TextField variant="standard" color="error" focused  required type="string" sx={{Color:'#ff8c00',width:"60%"}}/>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Chapter Name (Hindi)</Typography>
                            <TextField variant="standard" color="error" focused  required type="string" sx={{Color:'#ff8c00',width:"60%"}}/>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Verse No.</Typography>
                            <TextField variant="standard" color="error" focused  required type="string" sx={{Color:'#ff8c00',width:"60%"}}/>
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Shloka (Sanskrit)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                // ut labore et dolore magna aliqua."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Shloka (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                // ut labore et dolore magna aliqua."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Meaning (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                // ut labore et dolore magna aliqua."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Meaning (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                // ut labore et dolore magna aliqua."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Translation (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                // ut labore et dolore magna aliqua."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Translation (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                // ut labore et dolore magna aliqua."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>
                           
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}}>
                                <Box sx={{ textTransform: "capitalize",padding:"3px 25px",fontSize:"16px"}}>Save</Box>
                            </Button>
                        </Box>
                            
                    </Stack>
                </Stack>
            </Stack>
        </div>
        {/* Footer Section */}
        <Footer/>
    </div>
  )
}

export default AddNewSloka