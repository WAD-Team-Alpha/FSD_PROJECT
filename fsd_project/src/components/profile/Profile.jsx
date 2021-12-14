import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import {
  blue,
  blueGrey,
  deepOrange,
  deepPurple,
  green,
  lightGreen,
  lime,
} from "@mui/material/colors";
import Follow from "./Follow";
import NavTab from "./NavTab";
import classes from "./profile.module.css";

const Profile = () => {
  const profileName = useSelector((state)=>state.profile.firstName);
  return (
    <div>
      <div className={classes.maincontainer}>
        <div className={classes.avatar}>
          <Avatar sx={{ bgcolor: green[600], height: 95, width: 100 }}>
            <span className={classes.pfp}>P</span>
          </Avatar>
        </div>

        <div className={classes.uname}>
          <span className={classes.username}>{profileName !== "" ? profileName : "USERNAME"}</span>
          <div className={classes.followbutton}>
            <Follow />
          </div>
        </div>

        <div className={classes.unav}>
          <NavTab />
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
