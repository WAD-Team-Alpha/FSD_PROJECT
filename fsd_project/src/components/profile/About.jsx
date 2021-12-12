import classes from "./profile.module.css";

import React, { useState } from "react";
import Enabled from "./Enabled";
import Disabled from "./Disabled";
import { useSelector, useDispatch } from "react-redux";
import { profileActions } from "../../store/profile";
const About = () => {
  const dispatch = useDispatch();
  const aboutInfo = useSelector((state) => state.profile);
  const [inp, Setinp] = useState(true);
  const userInfo = {
    firstName: aboutInfo.firstName,
    lastName: aboutInfo.lastName,
    email: aboutInfo.email,
    university: aboutInfo.university,
    degree: aboutInfo.degree,
    graduationYear: aboutInfo.graduationYear,
    location: aboutInfo.location,
    bio: aboutInfo.bio,
  };
  const changeVal = (props) => {
    Setinp(false);
  };

  const editHandler = (
    firstName,
    lastName,
    email,
    university,
    degree,
    graduationYear,
    location,
    bio
  ) => {
    console.log(
      firstName,
      lastName,
      email,
      university,
      degree,
      graduationYear,
      location,
      bio
    );
    dispatch(
      profileActions.update({
        firstName: firstName,
        lastName: lastName,
        email: email,
        university: university,
        degree: degree,
        graduationYear: graduationYear,
        location: location,
        bio: bio,
      })
    );
    Setinp(true);
  };

  return (
    <div className={classes.mainabout}>
      <div className={classes.aboutformedit}>
        {!inp && (
          <button
            className={classes.edit_button}
            onClick={() => {
              Setinp(true);
            }}
          >
            Edit
          </button>
        )}
      </div>
      {inp && (
        <Enabled
          editHandler={editHandler}
          changeVal={changeVal}
          userInfo={userInfo}
        />
      )}
      {!inp && <Disabled editHandler={editHandler} userInfo={userInfo} />}
    </div>
  );
};

export default About;
