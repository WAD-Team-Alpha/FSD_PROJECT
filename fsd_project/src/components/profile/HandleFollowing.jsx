import { useState } from "react"
import classes from "./profile.module.css";
import { useDispatch } from "react-redux";
import {  following, unfollow } from "../../store/counterReducer";


const HandleFollowing = (props) => {
    const [followingStatus, setfollowingStatus] = useState("unfollow");
    const dispatch = useDispatch();

    const onClickHandler=()=>{
        if(followingStatus==="unfollow"){
            setfollowingStatus("follow")
            return dispatch(unfollow())
        }
        else{
            setfollowingStatus("unfollow")
            return dispatch(following())
        }

    }
    
    return   <button className={classes.followersFollowButton} onClick={onClickHandler}> {followingStatus} </button>
    
}

export default HandleFollowing