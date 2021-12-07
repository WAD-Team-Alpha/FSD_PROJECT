import React from "react";
import classes from "./main.module.css";
import Nav from "../nav/nav";
import ResultCard from "../results/Results";
const Main = () => {
  return (
    <div className={classes.main}>
      <div >
        <ResultCard />
      </div>
    </div>
  );
};

export default Main;
