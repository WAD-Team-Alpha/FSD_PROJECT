import React from "react";
import classes from "./main.module.css";
import Nav from "../nav/nav";
import ResultCard from "../results/Results";
import Home from "../home/home";
const Main = () => {
  return (
    <div className={classes.main}>
      <div><Home /></div>
      <div>
        {/* <ResultCard /> */}
      </div>
    </div>
  );
};

export default Main;
