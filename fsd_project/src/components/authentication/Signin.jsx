import React from "react";
import classes from "./Signin.module.css";
import { useState } from "react";


const Signin = (props) => {

  const [passwordShown, setPasswordShown] = useState(false);

  const showPass = () => {
    setPasswordShown(passwordShown ? false : true);
  };
 
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <div className={classes.container}>
          <div className={classes.container__wrapper}>
            <div className={classes.container__ribbon}></div>
          </div>
          </div>
            <h1 style={{textAlign:"center", marginBottom:"2em"}}>Signin to your Account</h1>
            <form>
                <label htmlFor="username" className={classes.loglabel}>Username</label>
                <input type="text" required id="username" className={classes.uname} placeholder="Enter your username"/><br/>
                <label htmlFor="pass" className={classes.loglabel}>Password</label>
                <input type={passwordShown ? "text" : "password"} required id="pass" className={classes.passcss}  placeholder="Enter your password"/><br/>
                <label htmlFor="cpass" className={classes.loglabel}>Confirm Password</label>
                <input  type={passwordShown ? "text" : "password"} required id="cpass" className={classes.loginput} placeholder="Enter your password again"/><br/>
                <div className={classes.checkboxdiv}><input type="checkbox" id="inpass" onClick={showPass} className={classes.checkpass}/>Show Password</div><br/>
                <button type="submit" className={classes.logbutton} onClick="#"><span>Sign in</span></button>

            </form>

            <h4 style={{textAlign:"center", marginTop:"1em", fontSize:"15px"}}><a href="{}">Signin with your Google Account</a></h4>
            <h4 style={{textAlign:"center", marginTop:"1em", fontSize:"15px"}}>Dont have an Account?? Click here to <a href="{}">SignUp</a></h4>
           
      </div>
    </div>
  );
};

export default Signin;
