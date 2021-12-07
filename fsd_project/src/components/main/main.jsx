import React from "react";
import classes from "./main.module.css";
import Nav from "../nav/nav";
import ResultCard from "../results/Results";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Main = () => {
  return (
    <div className={classes.main}>
      <div >
      <Router>
          <Routes>
            {/* <Route path="/" element={<ResultCard />} /> */}
            <Route path="/results" element={<ResultCard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Main;
