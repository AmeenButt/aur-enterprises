import { Box, Button, Container } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../../App.css'
import { IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import appContext from 'state/appContext'
import { ShoppingCart } from '@mui/icons-material'
import { toast } from 'react-toastify';
export default function Default() {
    const navigator = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [activeSection, setActiveSection] = useState("/");
    const handleClose = () => {
        setAnchorEl(null);
    };
    const location = useLocation()
    useEffect(() => {
        setActiveSection(location.pathname)
    }, [location]);
    const appState = useContext(appContext)
    const { setShowLogin, setShowCart, getData } = appState

    return (
        <>

            <Box className='background' style={{
                position: 'fixed', // Stick to the top
                top: 0, // Anchor to the top of the viewport
                height: '80px',
                background: '#fffffa',
                boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.2)',
                zIndex: '99',
                width: '100%'
            }}>
                <Container>
                    <Box sx={{
                        padding: {
                            xs: '0 2vw',
                            sm: '0 2vw',
                            md: '0 5vw',
                            lg: '0 5vw'
                        }
                    }}>
                        <Box style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Box style={{
                                marginTop: '10px'
                            }}>
                                <img src={Logo} alt={'logo'} style={{
                                    width: '80px',
                                    height: '90%'
                                }} />
                            </Box>
                            <Box sx={{
                                marginTop: '20px',
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'flex',
                                    lg: 'flex'
                                },
                                alignItems: 'center'
                            }}>
                                <Link to='/' style={{
                                    textDecoration: 'none',
                                    color: activeSection === '/' ? '#DA70D6' : '#525252',
                                    padding: '10px 20px',
                                }}>Home</Link>
                                <Link to='/contactus' style={{
                                    textDecoration: 'none',
                                    color: activeSection === '/contactus' ? '#DA70D6' : '#525252',
                                    padding: '10px 20px',
                                }}>Contact Us</Link>
                                <Link to='/services' style={{
                                    textDecoration: 'none',
                                    color: activeSection === '/services' ? '#DA70D6' : '#525252',
                                    padding: '10px 20px',
                                }}>Services</Link>
                                <Link to='/faqs' style={{
                                    textDecoration: 'none',
                                    color: activeSection === '/faqs' ? '#DA70D6' : '#525252',
                                    padding: '10px 20px',
                                }}>FAQs</Link>
                                <Link to='/about' style={{
                                    textDecoration: 'none',
                                    color: activeSection === '/about' ? '#DA70D6' : '#525252',
                                    padding: '10px 20px',
                                }}>About Us</Link>
                                {!localStorage.getItem('token') ? <Button variant='contained' style={{
                                    background: 'transparent',
                                    borderRadius: '6px',
                                    padding: '6px 23px',
                                    margin: '0px 20px',
                                    border: '1px solid #DA70D6',
                                    color: '#DA70D6',
                                    boxShadow: 'none',
                                    ':& hover': {
                                        background: '#DA70D6',
                                    }
                                }} onClick={() => setShowLogin(true)}>Login</Button> :
                                    <Button variant='contained' style={{
                                        background: 'transparent',
                                        borderRadius: '6px',
                                        padding: '6px 23px',
                                        margin: '0px 20px',
                                        border: '1px solid #DA70D6',
                                        color: '#DA70D6',
                                        boxShadow: 'none',
                                        ':& hover': {
                                            background: '#DA70D6',
                                        }
                                    }} onClick={() => {
                                        localStorage.clear()
                                        navigator('/')
                                        toast.success('Logout successfull', {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });

                                    }}>Logout</Button>}
                                {localStorage.getItem('token') && <ShoppingCart cursor={'pointer'} onClick={() => {
                                    getData()
                                    setShowCart(true)
                                }
                                } />}
                            </Box>
                            <Box sx={{
                                marginTop: '20px',
                                display: {
                                    xs: 'flex',
                                    sm: 'flex',
                                    md: 'none',
                                    lg: 'none'
                                }
                            }}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleClick}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    sx={{
                                        display: {
                                            xs: 'flex',
                                            sm: 'flex',
                                            md: 'none',
                                            lg: 'none'
                                        }
                                    }}
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <Link to='/' style={{
                                        textDecoration: 'none',
                                        color: activeSection === '/' ? '#DA70D6' : '#525252',
                                        padding: '10px 20px',
                                        display: 'block'
                                    }}>Home</Link>
                                    <Link to='/contactus' style={{
                                        textDecoration: 'none',
                                        color: activeSection === '/contactus' ? '#DA70D6' : '#525252',
                                        padding: '10px 20px',
                                        display: 'block'
                                    }}>Contact Us</Link>
                                    <Link to='/services' style={{
                                        textDecoration: 'none',
                                        color: activeSection === '/services' ? '#DA70D6' : '#525252',
                                        padding: '10px 20px',
                                        display: 'block'
                                    }}>Services</Link>
                                    <Link to='/faqs' style={{
                                        textDecoration: 'none',
                                        color: activeSection === '/faqs' ? '#DA70D6' : '#525252',
                                        padding: '10px 20px',
                                        display: 'block'
                                    }}>FAQs</Link>
                                    <Link to='/about' style={{
                                        textDecoration: 'none',
                                        color: activeSection === '/about' ? '#DA70D6' : '#525252',
                                        padding: '10px 20px',
                                        display: 'block'
                                    }}>About Us</Link>
                                    {!localStorage.getItem('token') ? <Button variant='contained' style={{
                                        background: '#DA70D6',
                                        borderRadius: '20px',
                                        margin: '0px 20px',
                                        ':& hover': {
                                            background: '#DA70D6',
                                        }
                                    }} onClick={() => setShowLogin(true)}>Login</Button> :
                                        <Button variant='contained' style={{
                                            background: '#DA70D6',
                                            borderRadius: '20px',
                                            margin: '0px 20px',
                                            ':& hover': {
                                                background: '#DA70D6',
                                            }
                                        }} onClick={() => {
                                            localStorage.clear()
                                            toast.success('Logout successfull', {
                                                position: "top-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                            });
                                        }}>Logout</Button>}
                                </Menu>
                            </Box>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </>
    )
}
