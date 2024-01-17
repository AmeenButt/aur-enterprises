import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import constructionImage from 'assets/construction.jpg'
import importExport from 'assets/import-export.jpg'
import softwareImage from 'assets/software.jpg'
import { useNavigate } from 'react-router-dom'
import ReactTyped from "react-typed";
export default function Default() {
    const navigator = useNavigate()
    const [currentText, setCurrentText] = useState('');
    const [text, setText] = useState('This is animation');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

        } else if (true) { // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, text]);


    return (
        <Box className='background' >
            <Box id="home" sx={{
                paddingTop: '80px',
                margin: {
                    xs: '40px 2vw',
                    sm: '40px 2vw',
                    md: '40px 5vw',
                    lg: '40px 5vw'
                },

            }}>
                <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom:'50px'
                }}>
                    <ReactTyped
                        style={{ fontSize: '28px', fontWeight: '600', color:'#DA70D6' }}
                        strings={
                            [
                                "Everything is easy with AUR Enterprises now",
                                "Everything under single platform"
                            ]
                        } backSpeed={50} typeSpeed={50} loop />
                </Box>
                <Grid container columnSpacing={5}>
                    <Grid item xs={12} sm={12} md={5} lg={5} align='center'>
                        <Box sx={{
                            width: '100%',
                            borderRadius: '15px',
                            height: '72%',
                        }}>
                            <img src={constructionImage} alt='homeimg1' style={{
                                width: '100%',
                                height: '100%'
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} align='left' sx={{
                        marginBottom: {
                            xs: '30px',
                            sm: '30px',
                            md: '0px',
                            lg: '0px',
                        }
                    }}>
                        <Box style={{
                            position: 'relative',
                        }}>

                            <Typography fontSize={'30px'} style={{
                                color: '#242424',
                                fontWeight: '700',
                            }}>
                                Get the construction done as per your needs</Typography><br />
                            <Typography fontSize={'18px'} style={{
                                color: '#242424',
                                fontWeight: '300',
                                textAlign: 'justify'
                            }}>
                                Our experienced team of builders, engineers, and designers is committed to delivering high-quality craftsmanship, on-time project completion, and budget-friendly solutions. From concept to completion, we handle every aspect of your construction project, ensuring a seamless and stress-free experience for our clients.</Typography><br />
                        </Box>

                    </Grid>
                </Grid>
                <Grid container columnSpacing={5}>
                    <Grid item xs={12} sm={12} md={7} lg={7} align='left' sx={{
                        marginBottom: {
                            xs: '30px',
                            sm: '30px',
                            md: '0px',
                            lg: '0px',
                        }
                    }}>
                        <Box style={{
                            position: 'relative',
                        }}>

                            <Typography fontSize={'30px'} style={{
                                color: '#242424',
                                fontWeight: '700',
                            }}>
                                Get what you can think by our Software service</Typography><br />
                            <Typography fontSize={'18px'} style={{
                                color: '#242424',
                                fontWeight: '300',
                                textAlign: 'justify'
                            }}>
                               Our team of skilled developers, designers, and technologists is dedicated to creating tailored software solutions that meet your specific needs and objectives. Whether you require web and mobile app development, custom software solutions, or software consulting, we have you covered.
                               </Typography><br />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} align='center'>
                        <Box sx={{
                            width: '100%',
                            borderRadius: '15px',
                            height: '72%',
                        }}>
                            <img src={softwareImage} alt='homeimg1' style={{
                                width: '100%',
                                height: '100%'
                            }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5}>
                <Grid item xs={12} sm={12} md={5} lg={5} align='center'>
                        <Box sx={{
                            width: '100%',
                            borderRadius: '15px',
                            height: '72%',
                        }}>
                            <img src={importExport} alt='homeimg1' style={{
                                width: '100%',
                                height: '100%'
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} align='left' sx={{
                        marginBottom: {
                            xs: '30px',
                            sm: '30px',
                            md: '0px',
                            lg: '0px',
                        }
                    }}>
                        <Box style={{
                            position: 'relative',
                        }}>

                            <Typography fontSize={'30px'} style={{
                                color: '#242424',
                                fontWeight: '700',
                            }}>
                                Get The Best rates for your bussiness imports and exports</Typography><br />
                            <Typography fontSize={'18px'} style={{
                                color: '#242424',
                                fontWeight: '300',
                                textAlign: 'justify'
                            }}>
                               AUR Enterprises is your trusted partner in global trade. Whether you are a small business looking to expand overseas or a large corporation with extensive international operations, our import/export services are designed to meet your needs. We believe in building strong, lasting relationships with our clients, ensuring that your trade ventures are successful and profitable.
                               </Typography><br />
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}
