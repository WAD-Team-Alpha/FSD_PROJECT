import { useThemeProps } from "@mui/material";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { follow, remove, removeuser } from "../../store/counterReducer";
import classes from "./profile.module.css";


const HandleFollow = (props) => {

  const [status,setStatus] = useState("remove")
  
  const onClickHandler = () =>{
    if(status==="remove"){
      setStatus("undo")
    
      return dispatch(remove(),removeuser())
    }
    else{
      setStatus("remove")
      return dispatch(follow())
    }
  }
  
  
  
  const dispatch = useDispatch()

  
    
  return <button className={classes.followersFollowButton} onClick={onClickHandler}>{status}</button>
    
}

export default HandleFollow