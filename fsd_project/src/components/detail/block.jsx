import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { withStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
const styles = muiBaseTheme => ({
  rating: {
   marginLeft:400,
   fontSize: 15,
 
  },
 
});

 function MediaCard({ classes }) {
  const [value, setValue] = React.useState(3);
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://picsum.photos/800/300"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <div  className={classes.rating}>
          
        <Box>
     
     
    
     <Rating name="read-only" value={value} readOnly />
     
   </Box></div>
      </CardActions>
    </Card>
  );
}

const Demo = withStyles(styles)(MediaCard);
export default Demo
