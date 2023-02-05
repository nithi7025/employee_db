import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

function Radiobutton(props) {
    const {label,name,onChange,value}=props
  return (
    <>
     <FormControl sx={{ pt: "2%", pb: "2%" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              {label}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={value}
              onChange={onChange}
            >
              <FormControlLabel
                size="small"
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                size="small"
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                size="small"
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl> 
    </>
  )
}

export default Radiobutton
