import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 80,
    maxHeight:80,
    
   
   
  },
  media: {
    // paddingTop: "56.25%",
    height: 50,
    width:80,
  },
  content: {
   
   paddingTop:10,
    
  },
 
 
  dist:{
    fontSize: 15,
    marginTop:-10 ,
  }
});



function WrappedApp(props) {
  const classes = useStyles();
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
        <Typography ><p className={classes.dist}>{props.type}</p></Typography>
          
         
        </CardContent>
      </Card>
    </div>
  );
}




export default WrappedApp

