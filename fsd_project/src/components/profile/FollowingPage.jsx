import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import classes from "./profile.module.css";
import { width } from "@mui/system";
import { Link } from "@mui/material";

const FollowingPage = () => {
  const names = ["peter", "elon", "joseph", "steve"];
  return (
    <div className={classes.MM}>
      {names.map((follower) => (
        <Stack direction="row" spacing={2} padding={0.6}>
          <Avatar className={classes.followersAvatar}
            sx={{ bgcolor: deepOrange[500], width: 40 }}
            src="/broken-image.jpg"
          ></Avatar>
          <Link   href="https://google.com" underline="hover">
            <div style={{ color: "black", marginTop:"1.5em"}}>{follower}</div>
          </Link>
          <div className={classes.followersButton}>
            <button className={classes.followersFollowButton}>Follow</button>
          </div>
          
        </Stack>
         
      ))}
      
    </div>
    
  );
 
};

export default FollowingPage;
