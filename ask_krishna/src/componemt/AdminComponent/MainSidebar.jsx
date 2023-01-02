import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Unknown from '../../images/unknown.jpg'
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './Sidebar.css'

function MainSidebar({active}) {
  return (
    <div>
      <Stack justifyContent="center" alignItems="center" sx={{margin:"15px 0px"}}>
        <Box sx={{width:"50%",height:"50%",borderRadius:"50%"}}>
          <img src={Unknown} style={{width:"100%",height:"100%",borderRadius:"50%",border:"2px solid white"}}></img>
        </Box>
        <Typography sx={{fontFamily:'Helvetica',lineHeight:"20px",fontWeight:"500",color:"rgb(72,67,56)",margin:"5px 0px",fontSize:"16px"}}>Deepak Kumar</Typography>
      </Stack>

      <Link to="/admin-dashboard" style={{ textDecoration: 'none' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="sidebar_option"
            sx={{
              background:
                active == "Chapter Directory"
                ? "rgb(160,78,78)"
                : "transparent",
                }}>
          <Stack spacing={2.5} direction="row" justifyContent="start" alignItems="center">
            <AutoStoriesIcon
              className="sidebar_option_icon"
                sx={{
                  fill: active == "Chapter Directory" ? "white" : "#8E97BA",
                }}
                />
              <Typography
                className="link_name"
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color:
                    active == "Chapter Directory" ? "white" : "#A4A4AD",
                  }}>
                  Chapter Directory
              </Typography>
          </Stack>
          <KeyboardArrowRightOutlinedIcon
            className="sidebar_option_icon"
            sx={{ 
              fill: active == "Chapter Directory" ? "white" : "transparent",
              fontSize: "20px"
            }}
          />
        </Stack>
      </Link>

      <Link to="/sloka" style={{ textDecoration: 'none' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="sidebar_option"
          sx={{
            background:
            active == "Verse Directory"
            ? "rgb(160,78,78)"
            : "transparent",
          }}>
          <Stack spacing={2.5} direction="row" justifyContent="start" alignItems="center">
            <AutoStoriesIcon
              className="sidebar_option_icon"
                sx={{
                  fill: active == "Verse Directory" ? "white" : "#8E97BA",
                }}
              />
            <Typography
              className="link_name"
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color:
                    active == "Verse Directory" ? "white" : "#A4A4AD",
                  }}>
                  Verse Directory
            </Typography>
          </Stack>
          <KeyboardArrowRightOutlinedIcon
            className="sidebar_option_icon"
            sx={{ 
              fill: active == "Verse Directory" ? "white" : "transparent",
              fontSize: "20px"
            }}
          />
        </Stack>
      </Link>
    </div>
  )
}

export default MainSidebar