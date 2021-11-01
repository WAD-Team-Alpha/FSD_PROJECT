import React, { useState } from "react";
import Signup from "./components/authentication/Signup";
import classes from "./App.module.css";
const App = () => {
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  return (
    <div>
      {signup && <Signup />}
      {/* {signin &&<Signin />} */}
      <div className={classes.center}>
        <h1>Code For APP</h1>
      </div>
    </div>
  );
};

export default App;
