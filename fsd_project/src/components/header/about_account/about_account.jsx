import React, { useState } from "react";
import classes from "./about_account.module.css";

const AboutAccount = (props) => {
  const [classname, setClassname] = useState(classes.hide);
  const [signin, setSignin] = useState(props.signin);
  console.log("this is running");
  function showAccountOptions() {
    classname === classes.hide
      ? setClassname(classes.show)
      : setClassname(classes.hide);
  }

  function verifySignin() {
    props.loginButtonHandler(true);
    // props.signin ? setSignin(false) : setSignin(true)
    // setClassname(classes.hide);
  }

  return (
    <React.Fragment>
      <div className="col-md-1 col-sm-1">
        <a className={classes.aboutbtn}>About</a>
      </div>
      <div className="col-md-1 col-sm-1">
        {!signin && (
          <a className={classes.signinbtn} onClick={verifySignin}>
            Signin
          </a>
        )}
        {signin && (
          <div className={classes.account_dropdown}>
            <button
              onClick={showAccountOptions}
              className={classes.dropdown_button}
            >
              pici
            </button>
            <div id={classname} className={classes.account_options}>
              <a onClick={verifySignin}>Signout</a>
              <a>Account</a>
              <a>Settings</a>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AboutAccount;
