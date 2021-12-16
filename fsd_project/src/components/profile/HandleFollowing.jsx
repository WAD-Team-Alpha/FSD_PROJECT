import { useState } from "react"
import classes from "./profile.module.css";


const HandleFollowing = (props) => {
    const[followingname,setFollowingName] = useState(false)

    const handleFollowing = () =>{
        setFollowingName(!followingname)
        if(followingname){props.toggleFollowing(1)}
    else {props.toggleFollowing(-1)}
    }
    return   <button className={classes.followersFollowButton} onClick={handleFollowing}> {followingname ? "follow" : "unfollow"}</button>
    
}

export default HandleFollowing