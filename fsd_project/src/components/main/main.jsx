import React from "react";
import classes from "./main.module.css";
import Nav from "../nav/nav";
import ResultCard from "../results/Results";
const Main = () => {
  return (
      
    <div >
        <div className={classes.nav}>
              <Nav/>
        </div>
        {/* < ResultCard /> */}
    </div>
  );
};

export default Main;
