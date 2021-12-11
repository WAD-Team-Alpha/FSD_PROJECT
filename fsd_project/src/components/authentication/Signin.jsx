import React from "react";
import classes from "./Signin.module.css";
import { useState } from "react";
import Signup from "./Signup";
import { Container } from "@mui/material";
import SigninInput from "./SigninInput";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  body: {
    padding: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    paddingBottom: "2em",
  },
});

const Signin = (props) => {
  const classesDesign = useStyles();
  

  return (
    <div>
      <div className={classes.backdrop} onClick={props.closeHandler}/>
      <div className={classes.modal}>
        <div className={classes.container}>
          <div className={classes.container__wrapper}>
            <div className={classes.container__ribbon}></div>
          </div>
        </div>
        <h1 style={{ textAlign: "center", marginTop: "0.5em" }}>
          Signin to your Account
        </h1>
        <form onSubmit={props.loginHandler}>
          <Container maxWidth="xl" className={classesDesign.body}>
            <SigninInput/>
            <br />
            <button type="submit" className={classes.logbutton} onClick="#">
              <span>Sign in</span>
            </button>
          </Container>
        </form>

        <h4 style={{ textAlign: "center", marginTop: "1em", fontSize: "15px" }}>
          <a href="{}">Signin with your Google Account</a>
        </h4>
        <h4 style={{ textAlign: "center", marginTop: "1em", fontSize: "15px" }}>
          Dont have an Account?? Click here to{" "}
          <button className="btn btn-primary" onClick={props.signupHandler}>
            SignUp
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Signin;
