import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
export default function Default(props) {
  const {question, answer, index} = props
  const [expendedIndex, setExpendedIndex] = useState(null)
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpendedIndex(isExpanded ? panel : null);
    };
  return (
    <Accordion
      expanded={expendedIndex === index}
      onChange={handleAccordionChange(index)}
      style={{

        margin: '20px 0px',

      }}
      sx={{
        '&:before': {
          display: 'none', // Hide the top border line
        },
      }}
    >
      <AccordionSummary  expandIcon={<ExpandMoreIcon style={{
        color: 'black',
        color:expendedIndex === index ? '#DA70D6' : 'inherit',
      }} />} style={{
        borderBottom: expendedIndex === index ? '1px solid #DA70D6' : '0px',
        padding:'6px 10px'
      }}>
        <Typography style={{
          color:expendedIndex === index ? '#DA70D6' : 'inherit',
          fontSize:'14px'
        }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{
          fontSize:'14px',
          padding:'6px 10px'
        }}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
