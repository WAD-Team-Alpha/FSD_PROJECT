import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

export default function SignupInput(props) {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, marginY: "1.5rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="firstName"
              label="First Name"
              variant="outlined"
              size="small"
              required
              onChange={(val)=>{props.setFirstName(val.target.value)}}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              variant="outlined"
              size="small"
              required
              onChange={(val)=>{props.setLastName(val.target.value)}}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              required
              onChange={(val)=>{props.setEmail(val.target.value)}}
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
              id="password"
              type={showPassword1 ? "text" : "password"}
              label="Password"
              variant="outlined"
              size="small"
              required
              onChange={(val)=>{props.setPassword(val.target.value)}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="cPassword"
              type={showPassword2 ? "text" : "password"}
              label="Confirm Password"
              variant="outlined"
              size="small"
              onChange={(val)=>{props.setCPassword(val.target.value)}}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
