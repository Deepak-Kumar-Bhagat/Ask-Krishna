import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import floral from '../../images/floral-decor.png';

function ContactUs() {
  return (
    <div>
        {/* including Navbar  */}
        {/* <Navbar/> */}
        <div className='background'> 
        {/* Contact Us Section */}
        <Box sx={{height:"100%",justifyContent:'center',display:"flex",flexDirection:"column",padding:"0px 20px",background:"transparent"}}>
            <Box sx={{padding:"3%",textAlign:"center"}}>
               <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',fontSize:"35px",fontWeight:"540",letterSpacing:"0.3rem"}}>Contact Us</Typography>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent"}}>
                   <Typography sx={{color:"rgb(201,164,112)",marginRight:"10px"}}>==========</Typography>
                   <img src={floral} style={{width:"5%",paddingTop:"0px"}}></img>
                   <Typography sx={{color:"rgb(201,164,112)",marginLeft:"10px"}}>==========</Typography>
                </Box>
                <form>
                    <Box className="contactbox" sx={{display:"flex",justifyContent:"center",margin:"35px 0px 0px 0px"}}>
                      <Stack directio="col" spacing={4} sx={{width:"600px"}}>
                        <TextField variant="standard" color="error" focused placeholder="Name *" required type="string" sx={{Color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Email *" required type="email" sx={{color:'#ff8c00'}} />
                        <TextField variant="standard" color="error" focused placeholder="Message *" required type="string" sx={{color:'#ff8c00'}} />
                        <Box>
                          <Button variant="contained" size="medium"  sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginTop:"10px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}>Send Message</Button>
                        </Box> 
                      </Stack>
                    </Box>
                </form>  
            </Box>
        </Box>
    </div>

    {/* Footer Section */}
    <Footer/>
    </div>
  )
}

export default ContactUs