import React from "react";
import classes from "./Signup.module.css";
import { useState } from "react";
import SignupInput from "./SignupInput";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  body: {
    padding: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
  },
});
const Signup = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const classesUi = useStyles();
  const showPass = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div>
      <div className={classes.backdrop} onClick={props.closeHandler} />
      <div className={classes.modal}>
        <div className={classes.container}>
          <div className={classes.container__wrapper}>
            <div className={classes.container__ribbon}></div>
          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>Create your Account</h1>
        <form onSubmit={props.loginHandler}>
          <Container maxWidth="xl" className={classesUi.body}>
            <SignupInput />
            <br />
          <button type="submit" className={classes.logbutton} onClick="#">
            <span>Sign up</span>
          </button>
          </Container>

          
        </form>

        <h4 style={{ textAlign: "center", marginTop: "1em", fontSize: "15px" }}>
          <a href="{}">Signin with your Google Account</a>
        </h4>
        <h4 style={{ textAlign: "center", marginTop: "1em", fontSize: "15px" }}>
          Already have an Account?? Click here to
          <button className="btn btn-primary" onClick={props.signinHandler}>
            Signin
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
