import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './profile.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, remove } from '../../store/counterReducer';





const Follow=(props) => {
    
    
    const dispatch = useDispatch();
    const followCount = useSelector((state) => state.counter.followers)
    const followingCount = useSelector((state) => state.counter.following)
    const [followStatus,setfollowStatus] = useState("follow");

    
  const onclickHandler = () =>{
    if(followStatus === "follow"){
      setfollowStatus("following")
      return dispatch(follow())
    }
    else {
      setfollowStatus("follow")
      return dispatch(remove())
    }
    
  }

  return (
      <div >
          <div className={classes.followers}>
            <span className={classes.following}><b>{followCount}</b> followers</span>
            <span className={classes.following}><b>{followingCount}</b> following</span>
          </div>
          <div className={classes.follow_buttons}>
            <button className={classes.followbutton} onClick={onclickHandler}>{followStatus}</button>
            
          </div>
    </div>
  );
}

export default Follow