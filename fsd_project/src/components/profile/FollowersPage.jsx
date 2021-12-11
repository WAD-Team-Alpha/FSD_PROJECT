import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import classes from "./profile.module.css";
import { width } from "@mui/system";
import { Link } from "@mui/material";

const FollowersPage = () => {
  const names = ["alex", "brian", "syd", "john"];
  return (
    <div className={classes.MM}>
      {names.map((follower) => (
        <Stack direction="row" spacing={2} padding={1}>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 40 }}
            src="/broken-image.jpg"
          ></Avatar>
          <Link style={{ marginTop: "0.3em" }} href="google.com" underline="hover">
            <span style={{ color: "black" }}>{follower}</span>
          </Link>
          <div className={classes.followersButton}>
            <button className={classes.followersFollowButton}>Follow</button>
          </div>
          
        </Stack>
         
      ))};
      
    </div>
    
  );
 
};

export default FollowersPage;
