import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

export default function SigninInput() {
  const [showPassword, setShowPassword] = React.useState(false);
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
 
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, marginY: "1.5rem" }}>
        <Grid container spacing={2}>
          
          
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              id="signin_email"
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              id="signin_password"
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              size="small"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
