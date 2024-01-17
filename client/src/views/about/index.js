import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import aboutUsImage from 'assets/service-about.jpg'
import { useNavigate } from 'react-router-dom'
export default function Default() {
    const navigator = useNavigate()
    return (
        <Box id='about' sx={{
            border: '1px solid transparent',
            borderBottom: '1px solid rgb(41, 72, 125)',
            marginTop: '60px',
            position: 'relative',
            paddingTop: '60px',
            margin: {
                xs: '0 2vw',
                sm: '0 2vw',
                md: '60px 7vw',
                lg: '60px 7vw'
            }
        }}>
            <Box style={{
                margin: '40px 80px',
            }}>
                <Typography style={{
                    fontSize: '33px',
                    color: '#DA70D6'
                }}>About Us</Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img src={aboutUsImage} alt='aboutUsImage' style={{
                            height: '100%',
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography style={{
                            fontSize: '46px'
                        }}>Next Generation Service Provider is Here Now!</Typography>
                        <Typography style={{
                            fontSize: '16px',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            At AUR Enterprises, we pride ourselves on being a versatile and dynamic company that's committed to excellence in every facet of our operations. With a strong foundation built on integrity, innovation, and reliability, we offer a comprehensive suite of services that cater to a wide range of needs.
                        </Typography>
                        <Typography style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#DA70D6',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            Our Services:
                        </Typography>
                        <Typography style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#DA70D6',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            Construction Services:
                        </Typography>
                        <Typography style={{
                            fontSize: '16px',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            In the realm of construction, AUR Enterprises stands as a symbol of quality and craftsmanship. Our team of dedicated professionals brings your architectural visions to life. Whether it's new construction, renovations, or interior and exterior design, we're equipped to handle projects of all sizes. We manage every step of the construction process, ensuring that your project is completed on time, within budget, and to the highest standards.
                        </Typography>
                        <Typography style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#DA70D6',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            Import/Export Services:
                        </Typography>
                        <Typography style={{
                            fontSize: '16px',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            Our import/export division is the gateway to a world of global trade opportunities. AUR Enterprises facilitates the movement of goods and services across borders with expertise in logistics, customs, and international regulations. We streamline your import/export operations, making it easier for your business to connect with international markets and seize new opportunities.
                        </Typography>
                        <Typography style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#DA70D6',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            Software Services:
                        </Typography>
                        <Typography style={{
                            fontSize: '16px',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            In the digital age, AUR Enterprises offers cutting-edge software solutions to help businesses thrive. Whether you need custom software development, web and mobile app creation, or software consulting, we have a team of skilled developers and designers ready to transform your concepts into reality. We focus on user-friendly, scalable, and secure software that propels your business forward.
                        </Typography>
                        <Typography style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#DA70D6',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            Our Commitment:
                        </Typography>
                        <Typography style={{
                            fontSize: '16px',
                            textAlign: 'justify',
                            marginTop: '20px'
                        }}>
                            What sets AUR Enterprises apart is our unwavering commitment to client satisfaction. We understand the unique needs of each client and tailor our services to match those requirements. Our goal is to exceed your expectations, providing efficient and effective solutions that drive growth and success.
                        </Typography>
                        <Button sx={{
                            backgroundColor: 'transparent',
                            borderRadius: '20px',
                            color: '#DA70D6',
                            border: '1px solid #DA70D6',
                            marginTop: '70px',
                            padding: '6px 15px'
                        }} onClick={() => navigator('/contactus')}>Contact us</Button>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}
