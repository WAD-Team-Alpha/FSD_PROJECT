import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './profile.module.css'
import { useState } from 'react';





const Follow=(props) => {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
        decrementCounter = () => setCounter(0);
    }


  return (
      <div>
          <div className={classes.followers}>
            <span className={classes.following}>{counter} FOLLOWERS</span>
            <span className={classes.following}>20 FOLLOWING</span>
          </div>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={incrementCounter}>FOLLOW</Button>
        <Button variant="outlined"  onClick={decrementCounter} >UNFOLLOW</Button>
        
        </Stack>
    </div>
  );
}

export default Follow