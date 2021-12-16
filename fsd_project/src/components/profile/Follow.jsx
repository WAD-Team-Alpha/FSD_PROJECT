import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './profile.module.css'
import { useState } from 'react';





const Follow=(props) => {
    
    const[follower,setFollower] = useState(false)
    
    const incrementCounter = () => {
      
      if(follower) {props.toggle(-1)}
      else {props.toggle(1)}
      setFollower(!follower)
      
    };

    
    
   

  return (
      <div >
          <div className={classes.followers}>
            <span className={classes.following}><b>{props.followers}</b> followers</span>
            <span className={classes.following}><b>{props.following}</b> following</span>
          </div>
          <div className={classes.follow_buttons}>
            <button className={classes.followbutton} onClick={incrementCounter}>{follower ? "following" : "follow"}</button>
            {/* <button className={classes.unfollowbutton} onClick={decrementCounter}>Unfollow</button> */}
          </div>
    </div>
  );
}

export default Follow