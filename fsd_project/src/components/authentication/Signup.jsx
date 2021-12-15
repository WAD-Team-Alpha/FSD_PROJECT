import React,{ useState } from "react";
import classes from "./Signup.module.css";
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
  const classesUi = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, firstName, lastName);
    props.loginHandler(email, password, firstName, lastName)
  }
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
        <form onSubmit={onSubmit}>
          <Container maxWidth="xl" className={classesUi.body}>
            <SignupInput
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword}
              setCPassword={setCPassword}
            />
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
