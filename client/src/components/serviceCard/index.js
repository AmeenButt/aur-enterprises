import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import baseUrl from 'url'

export default function Default({ btnText, item, onClick }) {
    return (
        <Card sx={{
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            display: {
                xs:'block',
                sm:'block',
                md:'flex',
                lg:'flex',
            }
        }}>
            <Box sx={{
                height:'250px',
                width:{
                    xs:'100%',
                    sm:'100%',
                    md:'300px',
                    lg:'300px',
                },
                position:'relative'
            }}>

            <img src={item.image.includes('upload') ? `${baseUrl}${item.image}` : item.image} width={'100%'} height={'100%'} />
            </Box>
            <Box sx={{ 
                padding: {
                xs:'0px 0px',
                sm:'0px 0px',
                md:'0px 30px',
                lg:'0px 30px',
            }, 
            display:{
                xs:'block',
                sm:'block',
                md:'flex',
                lg:'flex',
            }, justifyContent:'space-between', width:'100%' }}>
                <Box>
                    <Typography sx={{
                        fontSize: '24px',
                    }}>{item.name}</Typography>
                    <Typography sx={{
                        fontSize: '24px',
                        padding: '0px 0px 20px 0px'
                    }}>$ {item.price}</Typography>

                </Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                <Button variant='contained' style={{
                    width: '100%',
                    background: '#DA70D6',
                    borderRadius: '20px',
                    ':& hover': {
                        background: '#DA70D6',
                    }
                }} onClick={onClick} >
                    {btnText}
                </Button>
                </Box>
            </Box>
        </Card>
    )
}
