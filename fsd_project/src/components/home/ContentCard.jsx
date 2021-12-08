import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { makeStyles } from "@mui/styles";
import Image from "../../img/contemplative-reptile.jpg";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#a06750",
    margin: "1em",
  },
});

export default function ActionAreaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="140"
        image={Image}
        alt="green iguana"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{ bgcolor: deepOrange[500] }}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      
      <CardContent sx={{paddingTop:"0px"}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
    </Card>
  );
}
