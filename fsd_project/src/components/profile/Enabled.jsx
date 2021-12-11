import classes from "./profile.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import { BiotechTwoTone } from "@mui/icons-material";

const Enabled = (props) => {
  const [inp, Setinp] = useState(true);
  const [val, Setval] = useState(null);
  const [firstName, setFirstName] = useState(props.userInfo.firstName);
  const [lastName, setLastName] = useState(props.userInfo.lastName);
  const [email, setEmail] = useState(props.userInfo.email);
  const [university, setUniversity] = useState(props.userInfo.university);
  const [degree, setDegree] = useState(props.userInfo.degree);
  const [graduationYear, setGraduationYear] = useState(props.userInfo.graduationYear);
  const [location, setLocation] = useState(props.userInfo.location);
  const [bio, setBio] = useState(props.userInfo.bio);
  // const [graduationYear, setGraduationYear] = useState("");
  
  const onSubmitHandler = (event) => {
    // event.preventDefault();
    console.log("this is running");
    console.log(firstName);
    props.editHandler(firstName,lastName,email,university,degree,graduationYear,location,bio);
    props.changeVal();
    event.preventDefault();
  };

  const changeValHandler = () => {
    props.changeVal();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Box sx={{ flexGrow: 1, marginY: "1.5rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              onChange={(e)=>{setFirstName(e.target.value)}}
              fullWidth
              id="profile_firstName"
              label="First Name"
              size="small"
              required
              //   disabled={inp}
              defaultValue={props.userInfo.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              onChange={(e)=>{setLastName(e.target.value)}}
              id="profile_lastName"
              label="Last Name"
              size="small"
              defaultValue={props.userInfo.lastName}
              required
              //   disabled={inp}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              onChange={(e)=>{setEmail(e.target.value)}}
              id="profile_email"
              type="email"
              label="Email"
              size="small"
              required
              defaultValue={props.userInfo.email}
              //   disabled={inp}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              onChange={(e)=>{setUniversity(e.target.value)}}
              fullWidth
              id="progile_unv"
              label="University"
              size="small"
              defaultValue={props.userInfo.university}
              required
              //   disabled={inp}
              //    value="idk"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              onChange={(e)=>{setDegree(e.target.value)}}
              id="profile_degree"
              label="Type of Degree"
              size="small"
              defaultValue={props.userInfo.degree}
              required
              //   disabled={inp}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              onChange={(e)=>{setGraduationYear(e.target.value)}}
              id="profile_year"
              label="Graduation year"
              size="small"
              defaultValue={props.userInfo.graduationYear}
              required
              //   disabled={inp}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              onChange={(e)=>{setLocation(e.target.value)}}
              id="place"
              label="Location"
              size="small"
              defaultValue={props.userInfo.location}
              required
              //   disabled={inp}
            />
          </Grid>
        </Grid>
        <br />
        <Grid item xs={12} sm={12} md={12}>
        <TextField
          fullWidth
          id="profile_bio"
          label="Bio"
          multiline
          defaultValue={props.userInfo.bio}
          onChange={(e)=>{setBio(e.target.value)}}
          maxRows={8}
        />
        </Grid>
        <div className={classes.form_update}>
          <button className={classes.update_button} type="submit">
            Update
          </button>
        </div>
      </Box>
    </form>
  );
};

export default Enabled;
