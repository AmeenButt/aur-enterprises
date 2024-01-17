import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react';
const textFieldStyle = {
  backgroundColor: 'white',
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
export default function Default(props) {
  const { formik } = props
  return (
    <Card
      style={{
        width: '96%',
        background: 'white',
        borderRadius: '10px',
        padding: '25px 25px',
        boxShadow: 'none',
        border: '1px solid #DA70D6'
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          style={{
            margin: '15px 0px',
            display: 'flex',
            flexDirection: 'column', // Vertically align form elements
            gap: '5px', // Space between form elements
          }}
        >
          <Typography sx={{ paddingTop: '10px' }}>Enter Name</Typography>
          <TextField
            id="name"
            name="name"
            placeholder="Enter Your Name Here ..."
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={textFieldStyle}
            InputProps={{
              style: {
                borderRadius: "5px",
              }
            }}
          />
          <Typography sx={{ paddingTop: '10px' }}>Enter Phone</Typography>
          <TextField
            id="phone"
            name="phone"
            placeholder="Enter Phone Number Here ..."
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            sx={textFieldStyle}
            InputProps={{
              style: {
                borderRadius: "5px",
              }
            }}
          />
          <Typography sx={{ paddingTop: '10px' }}>Enter Email</Typography>
          <TextField

            id="email"
            name="email"
            placeholder="Enter Email Here ..."
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
          />

          <Typography sx={{ paddingTop: '10px' }}>Description</Typography>
          <TextField
            fullWidth
            id="message"
            name="message"
            placeholder="Enter Description Here ..."
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={textFieldStyle}
            InputProps={{
              style: {
                borderRadius: "5px",
              }
            }}
          />
          <Button
            type="submit"
           
            sx={{
              background: 'transparent',
              borderRadius: '10px',
              border:'1px solid #DA70D6',
              color:'#DA70D6',
              width: '100%',
              marginTop: '30px',

            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Card>
  )
}
