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
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CancelIcon from '@mui/icons-material/Cancel';


function AddNewSloka() {

    const [input,setinput]=useState();
    const [value,setValue]=useState("");
    const [editorValue, setEditorValue] = useState(RichTextEditor.createValueFromString(value, 'html'));
    const [editorValue1, setEditorValue1] = useState(RichTextEditor.createValueFromString(value, 'html'));
    const [searchKey,setSearchKey]= useState(["anger","lust","dddw","wwf wwrr"]);

    const handleChange1 = value => {
     setEditorValue(value);
     setValue(value.toString("html"));
    };

    const handleChange2 = value => {
     setEditorValue1(value);
     setValue(value.toString("html"));
    };

  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",minHeight:"100vh",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",border:"1px solid red"}}>
                    <MainSidebar active={"Verse Directory"}/>
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
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"60px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"10px"}}>Video Link</Typography>
                            <TextField variant="standard" color="error" focused  required type="string" sx={{Color:'#ff8c00',width:"60%"}}/>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px"}}>Search Key</Typography>
                            <Box sx={{width:"60%"}}>
                                <TextField onChange={(e)=>{setinput(e.target.value)}} value={input} variant="standard" placeholder="Please Type Keyword" 
                                    sx={{boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"10px 0px 0px 10px",border:'1px solid #a04e4e',width:"70%",padding:"5px"}}
                                    InputProps={{disableUnderline: true,startAdornment: <AddIcon sx={{ color: "#a04e4e", margin: 1 }}/>}}/>
                                <Button variant="contained"
                                    sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)",border:"1px solid #a04e4e",boxShadow:"0px 2px 6px rgba(19, 18, 66, 0.07)",borderRadius:"0px 10px 10px 0px"}}
                                    onClick={()=>{setSearchKey([...searchKey,input]);setinput("")}}
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
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Shloka (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Meaning (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Meaning (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>

                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"20px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Translation (Hindi)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="space-between" alignItems="" sx={{width:"100%",marginBottom:"40px"}}>
                            <Typography sx={{fontFamily:'Raleway',lineHeight:"20px",fontWeight:"500",fontSize:"20px",color:"rgb(72,67,56)",letterSpacing:"4px",marginBottom:"20px"}}>Translation (English)</Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Please Write Here..."
                                style={{ width:"99%",height:"100px",fontSize:"16px",background:"transparent",border:"1.5px solid rgb(72,67,56)"}}
                            />
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