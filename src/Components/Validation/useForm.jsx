import {useState} from 'react'

export default function useForm(initialFvalues) {
  const [values,setValues]=useState(initialFvalues)
  const [errors,setErrors]=useState({})
  const handleInputChange=(e)=>{
    const{ name,value }=e.target
    
    setValues({
       
      ...values,
      [name] : value
    })
    console.log(values)
    const temp={}
    const regex = /\S+@\S+\.\S+/;
    switch(name)
    {
      case 'firstname':
        temp.firstname=value.length>3?"":"first name should be greater than 3 characters";
        break;
      case 'mobile':
        temp.mobile=value.length>9?"":"mobile number needs to be greater than 9 numbers";
        break;
      case 'email':
        temp.email = regex.test(values.email) ? "" : "email is not valid";
        break;
        default:
          break;
    }
    setErrors({...temp});

   
   
    
  }
  return {
   values,
   setValues,
   errors,
   setErrors,
   handleInputChange
}
}


