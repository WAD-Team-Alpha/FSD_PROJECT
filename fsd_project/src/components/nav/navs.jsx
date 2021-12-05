import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { withStyles } from "@mui/styles";



const styles = muiBaseTheme => ({
  card: {
    maxWidth: 200,
    maxHeight:120,
    marginTop:20,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    // paddingTop: "56.25%",
    height: 80,
    width:100,
  },
  content: {
   
   paddingTop:-10,
    
  },
 
  heading: {
   
  },
 
  
});

function card({ classes }) {
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
        <Typography variant="h7">Moblie</Typography>
          
         
        </CardContent>
      </Card>
    </div>
  );
}



const WrappedApp = withStyles(styles)(card);
export default WrappedApp

