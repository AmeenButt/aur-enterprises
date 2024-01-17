import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React, { useContext } from 'react'
import appContext from 'state/appContext'
import baseUrl from 'url';
import { toast } from 'react-toastify';
const textFieldStyle = {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #DA70D6',
    "& label.Mui-focused": {
        color: '#DA70D6',
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
        borderBottomColor: '#DA70D6'
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
        borderBottomColor: '#DA70D6'
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: '#DA70D6'
        }
    }
}
export default function Default() {
    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.message = 'Required';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log('value')
            signUp(values)
        },
    });
    const signUp = async (values) => {
        await fetch(`${baseUrl}admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json()).then(response => {
            console.log(response)
            if (response.status) {
                setShowLogin(false)
                localStorage.setItem('token', response.token)
                localStorage.setItem('_id', response.result._id)
                // alert('Login Successfull')
                toast.success('Login Successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                formik.values.email = ''
                formik.values.password = ''
            }
            else {
                toast.error(response.message, {
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
    const appState = useContext(appContext)
    const { setShowSignup, showLogin, setShowLogin } = appState
    return (
        <>
            {
                showLogin &&
                <Box style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: '1111111',
                }} onClick={(e) => {
                    if (e.target == e.currentTarget) {
                        setShowLogin(false)
                    }
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        width: {
                            xs: '90vw',
                            sm: '90vw',
                            md: '33vw',
                            lg: '33vw',
                        },
                        backgroundColor: 'white',
                        padding: '50px',
                        borderRadius: '20px'
                    }}>
                        <center><Typography sx={{
                            fontSize: '28px',
                            marginBottom: '30px'
                        }}>
                            Login
                        </Typography></center>
                        <form onSubmit={formik.handleSubmit}>

                            <Typography sx={{ paddingTop: '10px' }}>Email Address</Typography>
                            <TextField

                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                sx={textFieldStyle}
                                InputProps={{
                                    style: {
                                        borderRadius: "5px",
                                    }
                                }}
                            /><br /><br />
                            <Typography sx={{ paddingTop: '10px' }}>Password</Typography>
                            <TextField

                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                sx={textFieldStyle}
                                InputProps={{
                                    style: {
                                        borderRadius: "5px",
                                    }
                                }}
                            /><br /><br />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    background: 'transparent',
                                    border: '1px solid #DA70D6',
                                    color: '#DA70D6',
                                    boxShadow: 'none',
                                    borderRadius: '20px',
                                    width: '100%',
                                    marginTop: '30px',
                                }}
                            >
                                Login
                            </Button>
                        </form><br /><br />

                        <center><Box sx={{ display: 'inline-flex' }}>

                            <Typography sx={{
                                color: '#DA70D6',
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }} onClick={() => {
                                setShowLogin(false)
                                setShowSignup(true)
                            }}>Sign up </Typography>
                            <Typography>&nbsp; Instead?</Typography>
                        </Box></center>
                    </Box>
                </Box>
            }
        </>
    )
}
