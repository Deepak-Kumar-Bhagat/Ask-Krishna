import { Stack } from '@mui/material'
import React from 'react'
import Footer from '../../LandingPage/Footer'
import MainSidebar from '../MainSidebar'

function ViewChapter() {
  return (
    <div>
        <div className='background'>
            <Stack direction="row" sx={{width:"100%",height:"auto",boxSizing:"border-box"}}>
                <Stack sx={{width:"20%",height:"auto",boxSizing:"border-box",boxShadow:"5px 5px 5px rgb(201,164,112)"}}>
                    <MainSidebar active={"Chapter Directory"}/>
                </Stack>
            </Stack>
            {/* Footer Section */}
            <Footer/>
        </div>
    </div>
  )
}

export default ViewChapter