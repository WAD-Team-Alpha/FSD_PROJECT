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

const Disabled = (props) => {
  const [inp, Setinp] = useState(true);
  const [val, Setval] = useState(null);

const onSubmitHandler=()=>{
    props.formHandler();
}

const changeValHandler=()=>{
    props.changeVal();
}
  return (
    <form onSubmit={onSubmitHandler}>
      <Box sx={{ flexGrow: 1, marginY: "1.5rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_firstName"
              label="First Name"
              size="small"
              required
              disabled
              value="hi"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_lastName"
              label="Last Name"
              size="small"
              value="lol"
              required
              disabled
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              id="profile_email"
              type="email"
              label="Email"
              size="small"
              required
              value="aedad@gmail"
              disabled
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
              fullWidth
              id="progile_unv"
              label="University"
              size="small"
              required
              disabled
              //    value="idk"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_degree"
              label="Type of Degree"
              size="small"
              required
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_year"
              label="Graduation year"
              size="small"
              required
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="place"
              label="Location"
              size="small"
              required
              disabled
            />
          </Grid>
        </Grid>
        <br />
        <span className={classes.profileaboutspan}>Employment Credentials</span>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_position"
              label="Position"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_company"
              label="Company name"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_company_startyear"
              label="Start year"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_company_endyear"
              label="End year"
              size="small"
              disabled
              value="2010"
            />
          </Grid>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                className={classes.about_checkbox}
                control={
                  <Checkbox name="checkbox" id="aboutcb" disabled={inp} />
                }
                label="I currently work here"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <div className={classes.form_update}>
          {/* <button className={classes.update_button} onClick={changeValHandler}>
            Update
          </button> */}
        </div>
      </Box>
    </form>
  );
};

export default Disabled;
