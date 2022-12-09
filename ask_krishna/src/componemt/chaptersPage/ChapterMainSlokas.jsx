import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ChapterMainSlokas() {

    const [temp,settemp]=useState([]);

    const tempFunction=()=>{
        let arr=[];
        for(let i=0;i<20;i++){
            let obj={
                title:"VERSE 1",
                para:"krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told",
            }
            arr.push(obj);
        }
        settemp(arr);
    }

    useEffect(()=>{
      tempFunction();
    },[])

  const [curpage, setcurpage] = useState(1);
  const [pageRange, setPageRange] = useState([0, 6]);

  const nextClick = () => {
    if (
      !(temp.length >= pageRange[0] && temp.length <= pageRange[1])
    ) {
      setcurpage(curpage + 1);
      setPageRange([pageRange[0] + 6, pageRange[1] + 6]);
    }
  };

  const prvClick = () => {
    if (pageRange[0] != 0 && pageRange[1] != 6) {
      setcurpage(curpage - 1);
      setPageRange([pageRange[0] - 6, pageRange[1] - 6]);
    }
  };

  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (temp) {
      let arr = [];
      for (
        let i = 1;
        i <=
        (temp.length % 6 == 0
          ? temp.length / 6
          : temp.length / 6 + 1);
        i++
      ) {
        arr.push(i);
      }
      setPages(arr);
    }
  }, [temp]);

  return (
    <div>
        <Box sx={{textAlign:"left",height:"550px"}}>
            <Box sx={{height:"500px",overflowY:"scroll"}}>
            {temp.map((ele,index)=>{
                if (index >= pageRange[0] && index <= pageRange[1]) {
                return(
                <Stack sx={{padding:"1.5% 4%",margin:"4% 1%",boxShadow:"0px 0px 5px #a04e4e"}}>
                    <Typography sx={{color:"rgb(72,67,56)",fontFamily: 'Raleway',fontSize:"23px",margin:"10px",letterSpacing:"4px"}}>{ele.title}</Typography>
                    <Typography sx={{color:"rgb(72,67,56)",fontFamily:'Raleway',fontSize:"16px",marginBottom:"2%"}}>krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told about your doubt/confusion in Bhagwat sk any doubt/confusion from krishna and see what krishna has told</Typography>
                    <Box>
                        <Button variant="contained" size="medium"  sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",marginBottom:"20px",color:"#a04e4e",background: 'none',border:"1px solid #a04e4e","&:hover": {backgroundColor: '#a04e4e',color:"white"}}}>open verse</Button>
                    </Box> 
                </Stack>)
                }
            })}
            </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {temp.length!=0 && 
            <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)"}}
              onClick={prvClick}>
                <ArrowBackIosIcon fontSize="small" />
                <Box sx={{ textTransform: "capitalize" }}>Previous</Box>
            </Button>}

            <Box sx={{background: "#E3E4EB",display: "flex",placeItems: "center",margin: " 0 10px",borderRadius: "5px"}}>
                <Box sx={{background: `white`,color: "black",width: "30px",borderRadius: "5px",margin: "0 10px",display: "grid",placeItems: "center"}}>{curpage}</Box>
                <Box sx={{color: "gray",width: "30px",borderRadius: "5px",margin: "0 0px",display: "grid",placeItems: "center"}}>of</Box>
                <Box sx={{background: `#E3E4EB`,color: "gray",width: "30px",borderRadius: "5px",margin: "0 10px",display: "grid",placeItems: "center"}}>{pages?.length}</Box>
            </Box>

            {temp.length!=0 && 
                <Button variant="contained" sx={{background:"linear-gradient(90deg, #a04e4e 0%, #a04e4e 100.33%)",padding:"0px 20px 0px 35px"}}
                    onClick={nextClick}>
                    <Box sx={{ textTransform: "capitalize" }}>Next</Box>
                    <ArrowForwardIosIcon fontSize="small" />
                </Button>
            }
          </Box>

        </Box>
    </div>
  )
}

export default ChapterMainSlokas