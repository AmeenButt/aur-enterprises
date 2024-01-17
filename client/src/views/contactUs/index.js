import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import contactusBackground from 'assets/contactUs.jpeg'
import { useFormik } from 'formik';
import { CloseOutlined } from '@mui/icons-material'
import ContactusForm from 'components/contactusForm'
import baseUrl from 'url';

export default function Default() {
    const [showFormSubmission, setShowFormSubmission] = useState(false)
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.message) {
            errors.message = 'Description is required';
        }
        if (!values.phone) {
            errors.phone = 'Phone is required';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            phone: '',
        },
        validate,
        onSubmit: values => {

            postForm(values);
        },
    });
    const postForm = async (values) => {
        await fetch(`${baseUrl}contactUs/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json()).then(response => {
            if (response.status) {
                setShowFormSubmission(true);
            }
        })
    }
    return (
        <>
            {showFormSubmission &&
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color for the overlay
                    zIndex: 111,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '16px'
                }}>
                    <Box style={{
                        width: '600px',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '16px',
                        padding: '25px 25px 50px 25px'
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <CloseOutlined onClick={() => {
                                setShowFormSubmission(false);
                                formik.values.name = '';
                                formik.values.email = '';
                                formik.values.message = '';
                            }} sx={{ cursor: 'pointer', color: 'black', marginBottom: '10px' }} />
                        </Box>
                        <Typography style={{
                            fontWeight: '600'
                        }}>Hey {formik.values.name} !</Typography>
                        <Typography>We have recieved your query and we will be in touch with you shortly through the email you provided.</Typography>
                    </Box>
                </div>}
            <Box id='contactus' style={{
                padding: '70px 0px'
            }}>
                <Box sx={{
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
                    }}>Contact Us</Typography><br/>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <img src={contactusBackground} alt='aboutUsImage' style={{
                                height: '100%',
                                width: '100%'
                            }} />
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} item>
                            <ContactusForm setShowFormSubmission={setShowFormSubmission} formik={formik} validate={validate} />
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </>
    )
}
