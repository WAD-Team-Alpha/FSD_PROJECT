import classes from "./profile.module.css";

import React, { useState } from "react";
import Enabled from "./Enabled";
import Disabled from "./Disabled";

const About = () => {
  const [inp, Setinp] = useState(true);
  const [val, Setval] = useState(null);

  const changeVal = (props) => {
    Setval("val");
    Setinp(false);
    
  };

  const editHandler=()=>{
    Setinp(true);
  }



  return (
    <div className={classes.mainabout}>
      <div className={classes.aboutformedit}>
        {!inp && <button className={classes.edit_button} onClick={editHandler}>
          Edit
        </button>}
      </div>
     { inp && <Enabled editHandler={editHandler} changeVal={changeVal}/>}
    {!inp && <Disabled editHandler={editHandler} changeVal={changeVal}/>}
    </div>
  );
};

export default About;
