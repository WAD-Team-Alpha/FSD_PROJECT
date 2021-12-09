import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import React, { useState } from "react";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import Muiheader from "./components/mui_header/Muiheader";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ResultCard from "./components/results/Results";
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const App = () => {
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  
  const signinHandler = () => {
    setSignup(false);
    setSignin(true)
    // console.log("login handler");
  };
  const signupHandler = () => {
    setSignup(true);
    setSignin(false)
    // console.log("login handler");
  };
  const loginHandler = () => {
    setSignup(false);
    setSignin(false);
    dispatch(authActions.login());
    // console.log("login handler");
  };
  const closeHandler = () => {
    setSignup(false);
    setSignin(false);
  };

  return (
    <React.Fragment>
      {/* Routing should be implemented here only */}
      {signup && <Signup signinHandler={signinHandler} loginHandler={loginHandler} closeHandler={closeHandler} />}
      {signin && <Signin signupHandler={signupHandler} loginHandler={loginHandler} closeHandler={closeHandler} />}
      <Main />
    </React.Fragment>
  );
};

export default App;
