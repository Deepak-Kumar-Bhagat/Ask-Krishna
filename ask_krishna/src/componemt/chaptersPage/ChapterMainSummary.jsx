import { Box, Typography } from '@mui/material'
import React from 'react'

function ChapterMainSummary({summary}) {
  return (
    <div>
        <Box sx={{textAlign:"left",padding:"3% 2% 0% 2%"}}>
            <Typography sx={{color:"#666666",fontFamily:'Raleway',fontSize:"16px"}}>{summary}</Typography>
        </Box>
    </div>
  )
}

export default ChapterMainSummary