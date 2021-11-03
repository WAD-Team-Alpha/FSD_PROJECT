import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import React, { useState } from "react";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
const App = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  return (
    <div>
      <Header />
      {signup && <Signup />}
      {signin &&<Signin />}
      <Main />
      <Footer />
    </div>
  );
};

export default App;
