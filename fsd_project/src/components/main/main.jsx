import React from "react";
import classes from "./main.module.css";
import Nav from "../nav/nav";
import ResultCard from "../results/Results";
import { BrowserRouter as Router, Route, Routes, Link,Redirect } from "react-router-dom";
import Home from '../home/home'
import Profile from "../profile/Profile";
import Layout from '../../Layout'
import Descrption from "../detail/dit";
import { Details } from "@mui/icons-material";
import { useSelector } from "react-redux";

import NewProfile from "../NewProfile/newProfile";

const Main = (props) => {
  const isAuth = useSelector((state) => state.auth);
  return (
    <div className={classes.main}>
      <div >
        <Router>
          <Layout signinHandler={props.signinHandler}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<ResultCard />} />
              {isAuth.isAuthenticated && <Route path="/profile" element={<Profile />} />}
              <Route path="/description" element={<Descrption />} />
              <Route path="*" element={<Home/>} />
              <Route path="/new-profile" element={<NewProfile/>} />

            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  );
};

export default Main;
