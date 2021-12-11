import classes from "./profile.module.css";

import React, { useState } from "react";
import Enabled from "./Enabled";
import Disabled from "./Disabled";
// import { set } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

const About = () => {
  const initialUserInfo = {
    firstName : "",
    lastName : "",
    email : "",
    university : "",
    degree : "",
    graduationYear : "",
    location : "",
  }
  const [inp, Setinp] = useState(true);
  const [val, Setval] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [location, setLocation] = useState("");
  const [userInfo, setuserinfo] = useState(initialUserInfo);
  const changeVal = (props) => {
    Setval("val");
    Setinp(false);
    
  };

  const editHandler=(firstName, lastName, email, university, degree, graduationYear, location)=>{
    // setFirstName(firstName);
    // setLastName(lastName);
    // setEmail(email)
    // setUniversity(university)
    // setDegree(degree)
    // setGraduationYear(graduationYear)
    // setLocation(location)
    console.log(firstName, lastName, email, university, degree, graduationYear, location);
    setuserinfo((prevState) => ({
      firstName : firstName,
      lastName : lastName,
      email : email,
      university : university,
      degree : degree,
      graduationYear : graduationYear,
      location : location,
    }));
    Setinp(true);
  }



  return (
    <div className={classes.mainabout}>
      <div className={classes.aboutformedit}>
        {!inp && <button className={classes.edit_button} onClick={()=>{Setinp(true)}}>
          Edit
        </button>}
      </div>
     { inp && <Enabled editHandler={editHandler} changeVal={changeVal} userInfo={userInfo}/>}
    {!inp && <Disabled editHandler={editHandler} changeVal={changeVal} userInfo={userInfo}/>}
    </div>
  );
};

export default About;
