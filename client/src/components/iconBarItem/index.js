import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Default(props) {
    const {icon, text} = props;
  return (
    <Box style={{
        padding:'30px 0px'
    }}>
        <img src={icon} alt='instaIcon' style={{
            height:'53px',
            width:'53px',
            cursor:'pointer'
        }}/>
        <Typography 
            style={{
                color:'white',
                fontSize:'24px',
                cursor:'pointer'
            }}
        >{text}</Typography>
    </Box>
  )
}
