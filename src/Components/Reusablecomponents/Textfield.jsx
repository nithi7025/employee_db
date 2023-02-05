import React from "react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#321453',
    },
    '&:hover fieldset': {
      borderColor: 'brown',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#321453',
    },

  },
});
function Textfield(props) {
  const { label, id, name, value, onChange, error = null,type,required=null } = props
  return (
    <div>
      <CssTextField
        size="small"
        sx={{ width:'100%' }}
        label={label} 
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}
export default Textfield