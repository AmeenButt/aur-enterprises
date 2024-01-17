import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import baseUrl from 'url'
import ServiceCard from 'components/serviceCard'
import { toast } from 'react-toastify'
import appContext from 'state/appContext'
export default function Default() {
    const [services, setservices] = useState([])
    const appState = useContext(appContext)
    const {setShowLogin} = appState
    const getData = async () => {
        await fetch(`${baseUrl}service/get`).then(res => res.json()).then(response => {
            console.log(response)
            if (response.status) setservices(response.result)
        })
    }
    useEffect(() => {
        getData()
        console.log('get')
    }, [])

    return (
        <Box id='faqs' sx={{
            paddingTop: '90px',
            margin: {
                xs: '40px 2vw',
                sm: '40px 2vw',
                md: '40px 5vw',
                lg: '40px 5vw'
            },
        }}>
            <Typography style={{
                fontSize: '33px',
                color: '#DA70D6'
            }}>Our Services</Typography>
            <br /><br />
            <Grid container spacing={4}>
                {services.map((item, index) => <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
                    <ServiceCard item={item} btnText='Add to Cart' onClick={async () => {
                        if(localStorage.getItem('_id')){
                            await fetch(`${baseUrl}cart/add`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    userID: localStorage.getItem('_id'),
                                    categoryID: services[index]._id
                                })
                            }).then(res => res.json()).then(response => {
                                console.log(response)
                                if (response.status) {
                                    toast.success('Item added to cart', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
                                }
                            })
                        }
                        else{
                            setShowLogin(true)
                        }
                    }} />
                </Grid>)}
            </Grid>

        </Box>
    )
}
