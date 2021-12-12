import Main from "./components/main/main";
import React, { useState, useEffect } from "react";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import { sendAuthData, fetchAuthData } from "./store/auth-actions";
import {sendProfileData, fetchProfileData} from './store/profile-actions'
const App = () => {
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const aboutData = useSelector((state) => state.profile);
  // var isStart = true;
  useEffect(() => {
    dispatch(fetchAuthData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);
  useEffect(() => {
    // if (isStart) {
    //   isStart = false;
    //   return
    // }
    dispatch(sendAuthData(isAuth));
  }, [isAuth, dispatch]);
  useEffect(() => {
    dispatch(sendProfileData(aboutData));
  }, [aboutData, dispatch]);

  const signinHandler = () => {
    setSignup(false);
    setSignin(true);
    // console.log("login handler");
  };
  const signupHandler = () => {
    setSignup(true);
    setSignin(false);
    // console.log("login handler");
  };
  const loginHandler = () => {
    setSignup(false);
    setSignin(false);
    dispatch(authActions.login(true));
    // console.log("login handler");
  };
  const closeHandler = () => {
    setSignup(false);
    setSignin(false);
  };

  return (
    <React.Fragment>
      {/* Routing should be implemented here only */}
      {signup && (
        <Signup
          signinHandler={signinHandler}
          loginHandler={loginHandler}
          closeHandler={closeHandler}
        />
      )}
      {signin && (
        <Signin
          signupHandler={signupHandler}
          loginHandler={loginHandler}
          closeHandler={closeHandler}
        />
      )}
      <Main signinHandler={signinHandler} />
    </React.Fragment>
  );
};

export default App;
