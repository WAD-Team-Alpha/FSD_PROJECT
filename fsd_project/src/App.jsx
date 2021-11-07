import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import React, { useState } from "react";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
const App = () => {
  const [signup, setSignup] = useState(false);
  // const [signin, setSignin] = useState(false);
  const [signedin, setSignedin] = useState(true);
  const loginButtonHandler = (state) => {
    setSignup(state);
    setSignedin(true);
    console.log("login handler");
  };
  return (
    <div>
      <Header loginButtonHandler={loginButtonHandler} signin={signedin} />
      {signup && <Signup />}
      {signin &&<Signin />}
      <Main />
      <Footer />
    </div>
  );
};

export default App;
