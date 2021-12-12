import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import React from "react";

const Disabled = (props) => {
  const onSubmitHandler = () => {
    props.formHandler();
  };

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
              value={props.userInfo.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="profile_lastName"
              label="Last Name"
              size="small"
              value={props.userInfo.lastName}
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
              value={props.userInfo.email}
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
              value={props.userInfo.university}
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
              value={props.userInfo.degree}
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
              value={props.userInfo.graduationYear}
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
              value={props.userInfo.location}
              required
              disabled
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
            maxRows={8}
            value={props.userInfo.bio}
            disabled
          />
        </Grid>
      </Box>
    </form>
  );
};

export default Disabled;
