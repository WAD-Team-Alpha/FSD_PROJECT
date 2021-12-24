import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import classes from "./profile.module.css";
import { width } from "@mui/system";
import { Link } from "@mui/material";
import { useState } from "react";
import HandleFollow from "./HandleFollow";
import { useSelector } from "react-redux";

const FollowersPage = (props) => {
  // const names = ["alex", "brian", "syd", "john", "jeremy", "ryan"];
  const followernames = useSelector((state)=> state.counter.followerslist)
  console.log(followernames)
  
 return (
    <div className={classes.MM}>
      {followernames.map((follower) => (
        <Stack direction="row" spacing={2} padding={0.6}>
          <Avatar className={classes.followersAvatar}
            sx={{ bgcolor: deepOrange[500], width: 40 }}
            src="/broken-image.jpg"
          ></Avatar>
          <Link   href="#" underline="hover">
            <div style={{ color: "black", marginTop:"1.5em"}}>{follower}</div>
            {console.log(follower)}
          </Link>
          <div className={classes.followersButton}>
            <HandleFollow />
          </div>
          
        </Stack>
         
      ))}
        
    </div>
    
  );
 
};

export default FollowersPage;
