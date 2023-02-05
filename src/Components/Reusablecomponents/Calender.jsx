import React from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


function Calender({label,name,setValues,values,error=null,views=['day', 'month', 'year'],inputformat="DD/MM/YYYY"}) {
  const [value, setvalue] = React.useState();

  const handleChange = (newvalue) => {
    setvalue(newvalue);
    console.log(newvalue)
    // let val=moment(e).format('DD/MM/YYYY')
    // console.log(val)
    setValues(
      {
        ...values,
        [name]:newvalue
      }
    )
  };
    
  return (
    <>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label={label}
          name={name}
          views={views}
          inputFormat={inputformat}
          value={value}
          emptyLabel="custom label"
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size='small' sx={{width:'100%','& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#321453',
            },
            '&:hover fieldset': {
              borderColor: 'brown',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#321453',
            },
          }
          }}/>}
        />
    </LocalizationProvider>
      
    </>
  )
}

export default Calender