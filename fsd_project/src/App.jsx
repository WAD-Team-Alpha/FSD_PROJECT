import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import React, { useState } from "react";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
const App = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  const [signedin, setSignedin] = useState(false);
  const loginButtonHandler = (state) => {
    setSignin(state);
    console.log("login handler");
  };
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
    setSignedin(true);
    // console.log("login handler");
  };

  return (
    <div>
      <Header loginButtonHandler={loginButtonHandler} signin={signedin} />
      {signup && <Signup signinHandler={signinHandler} loginHandler={loginHandler}/>}
      {signin &&<Signin signupHandler={signupHandler} loginHandler={loginHandler}/>}
      <Main />
      <Footer />
    </div>
  );
};

export default App;
