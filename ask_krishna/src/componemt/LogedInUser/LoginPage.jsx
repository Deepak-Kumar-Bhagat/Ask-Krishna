import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Apiaddress } from '../../utility';
import { useState } from 'react';


function LoginPage({chapterTrigger,setChapterTrigger}) {

  const navigate=useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const onSubmit=async ()=>{
    try{
      const url=Apiaddress + "/user/login";
      const res = await axios.post(url,{email:email,password:password});
      console.log(res?.data?.data);
      if(res?.status==200){
        let obj={
          name:res?.data?.data?.name,
          image:res?.data?.data?.image,
          role:res?.data?.data?.role
        }
        localStorage.setItem('user',JSON.stringify(obj));
        setChapterTrigger(!chapterTrigger);
        navigate('/');
      }
    }catch(err){
      alert(err?.response?.data?.data);
    }
  }

  return (
    <div>
        {/* including Navbar  */}
        {/* <Navbar/> */}
        <div className='background'> 
        {/* Login Section */}
              <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 20px",background:"transparent"}}>
                <Box sx={{padding:"5%",textAlign:"center"}}>
                  <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.2rem"}}>Login</Typography>
                  <Box sx={{width:'115px',margin:"5px auto",border:"2px solid #a04e4e"}}></Box>
                  
                  <form>
                  <Box sx={{display:"flex",justifyContent:"center",margin:"40px 0px 0px 0px"}}>
                    <Stack directio="col" spacing={4} sx={{width:"600px"}}>
                        <TextField variant="standard" color="error" focused placeholder="Email *" required type="email" sx={{color:'#ff8c00'}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <TextField variant="standard" color="error" focused placeholder="Password *" required type="string" sx={{color:'#ff8c00'}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <Box>
                          <Button variant="contained" size="medium"  sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}} onClick={onSubmit}>Login</Button>
                        </Box> 
                    </Stack>  
                   </Box>
                   </form>

                   <Stack direction="row" spacing={4} sx={{justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                    <Box sx={{justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <GoogleIcon sx={{fontSize:"35px",color:"#907d4d", "&:hover":{color:"#a04e4e"}}}/>
                    </Box>
                    <Box sx={{justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <FacebookIcon sx={{fontSize:"35px",color:"#907d4d", "&:hover":{color:"#a04e4e"}}}/>
                    </Box>
                    <Box sx={{justifyContent:"center",alignItems:"center",display:"flex",border:"1.5px solid lightgray",cursor:"pointer",borderRadius:"50%",padding:"1%","&:hover":{boxShadow:"0px 0px 5px #a04e4e",border:"none"}}}>
                      <InstagramIcon sx={{fontSize:"35px",color:"#907d4d", "&:hover":{color:"#a04e4e"}}}/>
                    </Box>
                   </Stack>
                   
                   <Typography sx={{marginTop:"20px",fontSize:"18px",letterSpacing:"2px",fontFamily:'Helvetica'}}><a href='' className='adminLink'>Admin Login ?</a></Typography>
                   <Typography sx={{color:"#666666",fontFamily:'Helvetica',fontSize:"18px",marginTop:"15px",letterSpacing:"2px",fontWeight:"500"}}>Don't have an account ? <a href='/user-signup' className="footerLink" style={{color:"#a04e4e"}}> Sign Up</a></Typography>
                   
                </Box>
              </Box>
        </div>

        {/* Footer Section */}
        <Footer/>
    </div>
  )
}

export default LoginPage