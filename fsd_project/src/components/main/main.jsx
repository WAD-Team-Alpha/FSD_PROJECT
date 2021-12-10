import React from "react";
import classes from "./main.module.css";
import Nav from "../nav/nav";
import ResultCard from "../results/Results";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from '../home/home'
import Profile from "../profile/Profile";
import Layout from '../../Layout'
const Main = (props) => {
  return (
    <div className={classes.main}>
      <div >
        <Router>
          <Layout signinHandler={props.signinHandler}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<ResultCard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  );
};

export default Main;
