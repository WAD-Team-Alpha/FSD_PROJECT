import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './profile.module.css'
import { useState } from 'react';





const Follow=(props) => {
    const [counter, setCounter] = useState(1);
   
    const incrementCounter = () => {
      setCounter(counter + 1);
    
    };
    
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
        decrementCounter = () => setCounter(0);
    }


  return (
      <div >
          <div className={classes.followers}>
            <span className={classes.following}><b>{counter}</b> followers</span>
            <span className={classes.following}><b>20</b> following</span>
          </div>
          <div className={classes.follow_buttons}>
            <button className={classes.followbutton} onClick={incrementCounter}>Follow</button>
            <button className={classes.unfollowbutton} onClick={decrementCounter}>Unfollow</button>
          </div>
    </div>
  );
}

export default Follow