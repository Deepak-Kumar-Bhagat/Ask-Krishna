import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'

function SignUpPage() {
  return (
    <div>
        {/* including Navbar  */}
        <Navbar/>
        <div className='background'> 
        {/* Sign Up Section */}
              <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 20px",background:"transparent"}}>
                <Box sx={{padding:"5%",textAlign:"center"}}>
                  <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.2rem"}}>Sign Up</Typography>
                  <Box sx={{width:'115px',margin:"5px auto",border:"2px solid #a04e4e"}}></Box>
                  
                  <form>
                  <Box sx={{display:"flex",justifyContent:"center",margin:"20px 0px 0px 0px"}}>
                    <Stack directio="col" spacing={4} sx={{width:"600px"}}>
                        <TextField variant="standard" color="error" focused placeholder="Your Name *" required type="string" sx={{Color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Your Email *" required type="email" sx={{color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Password *" required type="string" sx={{color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Confirmed Password *" required type="string" sx={{color:'#ff8c00'}} />
                        <Box>
                          <Button variant="contained" size="medium"  sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}>Sign Up</Button>
                        </Box> 
                    </Stack>  
                   </Box>
                   </form>

                   <Typography sx={{color:"#666666",fontFamily:'Helvetica',fontSize:"18px",marginTop:"30px",letterSpacing:"2px",fontWeight:"500"}}>Already have an account ? <a href='' className="footerLink" style={{color:"#a04e4e"}}> Login</a></Typography>
                </Box>
              </Box>
        </div>

        {/* Footer Section */}
        <Footer/>
    </div>
  )
}

export default SignUpPage