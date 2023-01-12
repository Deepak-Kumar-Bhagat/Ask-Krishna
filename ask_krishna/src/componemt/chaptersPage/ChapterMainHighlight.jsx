import { Box, Typography } from '@mui/material'
import React from 'react'
import parse from 'html-react-parser';

function ChapterMainHighlight({highlight}) {
  return (
    <div>
        <Box sx={{textAlign:"left",padding:"3% 2% 0% 2%"}}>
          {
            highlight && <Typography sx={{color:"#666666",fontFamily:'Raleway',fontSize:"16px"}}>{parse(highlight)}</Typography> 
          }
        </Box>
    </div>
  )
}

export default ChapterMainHighlight