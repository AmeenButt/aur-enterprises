import { Box, Grid, Typography, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import faqsImage from 'assets/faqsImage1.jpeg'
import FaqsDropdown from 'components/faqsDropDown';
import baseUrl from 'url';
const textFieldStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    width:'100%',
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
    const [faqs, setFaqs] = useState([
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat purus. Nunc interdum arcu eu mauris gravida tincidunt. Vivamus vel nibh quis ligula posuere accumsan. Fusce gravida, "
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat purus. Nunc interdum arcu eu mauris gravida tincidunt. Vivamus vel nibh quis ligula posuere accumsan. Fusce gravida, "
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat purus. Nunc interdum arcu eu mauris gravida tincidunt. Vivamus vel nibh quis ligula posuere accumsan. Fusce gravida, "
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat purus. Nunc interdum arcu eu mauris gravida tincidunt. Vivamus vel nibh quis ligula posuere accumsan. Fusce gravida, "
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat purus. Nunc interdum arcu eu mauris gravida tincidunt. Vivamus vel nibh quis ligula posuere accumsan. Fusce gravida, "
        },
    ])
    const getData = async () => {
        await fetch(`${baseUrl}faq/get`).then(res => res.json()).then(response => {
            if (response.status) setFaqs(response.result)
        })
    }
    const search = async (e) => {
        if (e.target.value == '') {
            getData()
        }
        else {
            await fetch(`${baseUrl}faq/search?text=${e.target.value}`).then(res => res.json()).then(response => {
                if (response.status) setFaqs(response.result)
            })
        }
    }
    useEffect(() => {
        getData()
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
            }}>FAQs</Typography>

            <Grid container sx={{ marginTop: '40px' }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <img src={faqsImage} alt='faqsImage' style={{
                        width: '100%',
                        height: ''
                    }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        id="search"
                        name="search"
                        placeholder="Search Here ..."
                        onChange={search}
                        sx={textFieldStyle}
                        InputProps={{
                            style: {
                                borderRadius: "5px",
                            }
                        }}
                    />
                    {faqs.map((item, index) => <FaqsDropdown key={index} question={item.question} answer={item.answer} index={index} />)}
                </Grid>
            </Grid>

        </Box>
    )
}
