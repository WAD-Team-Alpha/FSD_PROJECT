import { useThemeProps } from "@mui/material";
import { useState } from "react"
import classes from "./profile.module.css";


const HandleFollow = (props) => {
  const[followername,setFollowerName] = useState(false)
    

  const handleFollow = () =>{
    setFollowerName(!followername)
    if(followername){props.toggleFollowers(1)}
    else {props.toggleFollowers(-1)}
  }
    return <button className={classes.followersFollowButton} onClick={handleFollow}>{followername ? "undo" : "remove"}</button>
    
}

export default HandleFollow