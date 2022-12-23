import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageIcon from '@mui/icons-material/Language';
import { Apiaddress } from '../../utility';

import krishnalogo from '../../images/krishnalogo.png';
import pattern from '../../images/pattern.png';
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const pages = ['Home', 'About', 'Chapters','Question','Quotes','Contact Us'];
// const settings = ['Profile', 'Favourite Verses', 'Favourite Quotes', 'Logout'];
const language = ['English','Hindi'];

function Navbar({chapterTrigger,setChapterTrigger}) {

 let userdata = JSON.parse( localStorage.getItem('user') );

  const navigate=useNavigate();

  const [settings,setSettings] = useState([]);
  const [landingPage,setLandingPage]=React.useState(false);

  React.useEffect(()=>{
    if(userdata && userdata?.role==="user"){
      let arr=['Profile', 'Favourite Verses', 'Favourite Quotes', 'Logout'];
      setSettings(arr);
    }
    else{
      let arr=['Profile', 'Favourite Verses', 'Favourite Quotes','Dashboard', 'Logout'];
      setSettings(arr);
    }
  },[chapterTrigger])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElChapter, setAnchorElChapter] = React.useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);

  const handleOpenLanguage = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };
  const handleCloseLanguage = (event) => {
    setAnchorElLanguage(null);
  };

  const handleOpenChapter = (event) => {
    setAnchorElChapter(event.currentTarget);
  };
  const handleCloseChapter = (event) => {
    setChapterTrigger(!chapterTrigger)
    setAnchorElChapter(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [chapterList,setChapterList]=useState([]);
  const [trigger,setTrigger]=useState(false);

  const fetchChapterList=async ()=>{
    try{
      const url=Apiaddress + "/chapter/chaptercount";
      const res = await axios.get(url, {});
      // console.log(res?.data?.data);
      setChapterList(res?.data?.data);
    }catch(err){
      console.log(err);
    }
  }

  React.useEffect(()=>{
    fetchChapterList();
  },[])

  const userDelete=async()=>{
    try{
      const url=Apiaddress + "/user/logout";
      const res = await axios.get(url, {});
      console.log(res?.data?.data);
      localStorage.removeItem('user');
      setChapterTrigger(!chapterTrigger);
      setSettings([]);
    }catch(err){
      console.log(err);
    }
  }

  const userSubmit=(setting)=>{
    if(setting==="Logout"){
      userDelete();
    }
  }

  return (
    <AppBar position="sticky" style={{}}>
      {/* "rgba(248, 250, 252,.7)" */}
      <Container maxWidth="xl" className="navbar" sx={{backgroundColor:"rgb(160,78,78)",padding:"7px 10px"}}>
        <Toolbar disableGutters>
           <Box sx={{padding:"0.5% 0%"}}>
             <img src={krishnalogo} style={{width:"80px",margin:"0px 0px 0px 0px"}}></img>
             <Typography
           
            sx={{
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'rgb(254,218,106)',
              textDecoration: 'none',
              textAlign:"center",
              fontSize:"8px",
              margin:"-5px 0px 0px 0px"
            }}
          >
            ASK KRISHNA
          </Typography>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"rgb(240,227,227)",margin:"0px 0px 0px 5px"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{color:"#a04e4e",fontFamily: 'Helvetica'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },marginLeft:"30px" }}>

            <Link to="Home" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={1300}>
            <Button sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
            onClick={()=>{
              navigate('/');
            }}
            >
              Home  
            </Button>
            </Link>
            <Link to="About" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={1300}>
              <Button sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
              onClick={(e)=>{
                e.stopPropagation();
                navigate('/about-us');
              }}
              >
                About  
              </Button>
            </Link>
            <Button sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
              onClick={handleOpenChapter}  
            >
              Chapters  
            </Button>
             <Menu
              sx={{ mt: '60px',ml:"50px"}}
              id="menu-appbar"
              anchorEl={anchorElChapter}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElChapter)}
              onClose={handleCloseChapter}
              >
            <Box sx={{border:"1.5px solid rgb(201,164,112)",margin:"3px 12px",overflow:"hidden"}}>
              {chapterList?.map((chapter) => (
                <MenuItem key={chapter?.chapterNo} onClick={()=>{handleCloseChapter();navigate(`/chapter-main-page/${chapter.chapterNo}`)}} sx={{}}>
                  <Typography textAlign="center" sx={{color:"#a04e4e",fontFamily: 'Helvetica',borderBottom:"1.2px dotted rgb(201,164,112)",padding:"5px 40px"}}>{`Chapter ${chapter?.chapterNo}`}</Typography>
                </MenuItem>
              ))}
            </Box>
            </Menu>
            
            <Button sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
              onClick={()=>{navigate('/question-page')}}
            >
              Questions  
            </Button>
            <Button sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}>
              Quotes  
            </Button>
            <Link to="Contact Us" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={1300}>
              <Button sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
              onClick={(e)=>{
                e.stopPropagation();
                navigate('/contact-us');
              }}
              >
                Contact Us 
              </Button>
            </Link>
            {/* {pages.map((page) => (
            <Link to={`${page}`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{mx:1,color: 'rgb(240,227,227)', display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
              >
                {page}
              </Button>
            </Link>
            ))} */}
          </Box>
          
          <Box>
            <LanguageIcon onClick={handleOpenLanguage} sx={{color:'rgb(240,227,227)',fontSize:"35px",mx:userdata?4:3,cursor:"pointer",marginTop:"3px"}}/>
          </Box>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguage}
            >
            <Box sx={{border:"1.5px solid rgb(201,164,112)",margin:"3px 8px",overflow:"hidden"}}>
              {language.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseLanguage} sx={{}}>
                  <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',borderBottom:"1.2px dotted rgb(201,164,112)",padding:"5px",textAlign:"center",width:"100%"}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Box>
          </Menu>
          
          {userdata && (userdata?.role==='user'|| userdata?.role==='admin')?
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <Box sx={{border:"1.5px solid rgb(201,164,112)",margin:"3px 8px",overflow:"hidden"}}>
              {settings.map((setting,index) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{}}>
                  <Typography sx={{color:"#a04e4e",fontFamily: 'Helvetica',borderBottom:"1.2px dotted rgb(201,164,112)",padding:"5px",textAlign:"center",width:"100%"}}
                  onClick={()=>{userSubmit(setting)}}
                  >{setting}</Typography>
                </MenuItem>
              ))}
            </Box>
            </Menu>
          </Box>
          :
          <Button sx={{color: 'rgb(240,227,227)',display: 'block',fontWeight:"500",fontFamily: 'Helvetica',fontSize:"18px" }}
          onClick={()=>{
            navigate("/user-login");
          }}
          >
            Login
          </Button>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar


   

  