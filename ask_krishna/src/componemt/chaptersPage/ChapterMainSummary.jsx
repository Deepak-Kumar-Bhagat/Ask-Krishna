import { Box, Typography } from '@mui/material'
import React from 'react'
import parse from 'html-react-parser';

function ChapterMainSummary({summary}) {
  return (
    <div>
        <Box sx={{textAlign:"left",padding:"3% 2% 0% 2%"}}>
          {
            summary && <Typography sx={{color:"#666666",fontFamily:'Raleway',fontSize:"16px"}}>{parse(summary)}</Typography> 
          }
        </Box>
    </div>
  )
}

export default ChapterMainSummary