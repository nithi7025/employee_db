import { Button, Checkbox, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useForm from "../Components/Validation/useForm";
import Textfield from "../Components/Reusablecomponents/Textfield";
import { Country, State } from "country-state-city";
import Dropdownlist from "../Components/Reusablecomponents/Dropdownlist";
import Calender from "../Components/Reusablecomponents/Calender";
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
// console.log(Country.getAllCountries())
// console.log(State.getAllStates())

const initialFvalue = {
  firstname: "",
  lastname: "",
  city: "",
  mobile: "",
  email: "",
  country: "",
  state: "",
};

function Registrationform() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalue);

  const [image, setImage] = useState(null);
  const [file, selectedFile] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      selectedFile(event.target.files[0]);
    }
    console.log(image);
  };

  const countries = Country.getAllCountries();
  // countries
  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  // // state
  const updatedStates = (countryId) => {
    const st = State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));
    return st;
  };

 
const navigate =useNavigate();
  const regex = /\S+@\S+\.\S+/;

  const validate = () => {
    let temp = {};
    temp.firstname = values.firstname ? "" : "firstname is required";
    temp.lastname = values.lastname ? "" : "lastname is required";
    temp.city = values.city ? "" : "city is required";
    temp.email = regex.test(values.email) ? "" : "email is not valid";
    temp.mobile=values.mobile.length>9?"":"mobile number needs to be greater than 9 numbers";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const submit=()=>{
    if(validate()){
      alert("successfully submited")
      navigate('/Employee_table')
    }
  }

  return (
    <>
      <Box sx={{ background: "linear-gradient(#c2481e,#321453)", p: "2%" }}>
        <Paper elevation={6} sx={{ p: "4%" }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{
              color: "#321453",
              pb: "2%",
              display: "flex",
              justifyContent: "center",
              fontFamily: "Brush Script",
            }}
          >
            Enter Student Details
          </Typography>
          <Box
            // component="form"
            // noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 4,
              width: "100%",
            }}
          >
            <input type="file" onChange={onImageChange} className="filetype" />
            <img src={image} width="100" height="100" />

            <Textfield
              label="First Name"
              name="firstname"
              value={values.firstname}
              error={errors.firstname}
              onChange={handleInputChange}
            />
            <Textfield
              label="Last Name"
              name="lastname"
              value={values.lastname}
              error={errors.lastname}
              onChange={handleInputChange}
              required="false"
            />
            <Calender
              label="Issued Date"
              name="visaissuedate"
              setValues={setValues}
              values={values}
            />
            <Textfield
              label="City"
              name="city"
              value={values.city}
              error={errors.city}
              onChange={handleInputChange}
              required="true"
            />
            <Textfield
              label="Mobile No"
              name="mobile"
              value={values.mobile}
              error={errors.mobile}
              onChange={handleInputChange}
              required="true"
              type="number"
            />
            <Textfield
              label="Email"
              name="email"
              value={values.email}
              error={errors.email}
              onChange={handleInputChange}
              required="true"
            />
            <Dropdownlist
              name="country"
              label="Country"
              value={values.country}
              handleInputChange={handleInputChange}
              options={updatedCountries}
            />
            <Dropdownlist
              name="state"
              label="State"
              value={values.state}
              handleInputChange={handleInputChange}
              options={updatedStates(values.country ? values.country : null)}
            />
          </Box>
          <Box sx={{ pt:2 }}>
          <fieldset>
            <legend align="left">
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ color: "#c2481e" }}
              >
                Proffessional Skills
              </Typography>
            </legend>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Checkbox label="Communication" />
            <Checkbox label="Abililty To Work Under Pressure" />
            <Checkbox label="Abililty To Work Under Pressure" />
            <Checkbox label="Decision Making" />
            <Checkbox label="Time Management" />
            <Checkbox label="Self Motivation" />
            <Checkbox label="Conflict Resolution" />
            <Checkbox label="Leadership" />
            <Checkbox label="Adaptability" />
            </Box>
          </fieldset>
          </Box>
          <Box sx={{pt:2 }}>
          <Button  variant="contained"sx={{ m:1,background:'red' }} onClick={submit}>Submit</Button>
          <Button  variant="contained" sx={{background:'red' }}>Cancel</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Registrationform;