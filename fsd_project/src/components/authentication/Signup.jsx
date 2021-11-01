import React from 'react';
import classes from './Signup.module.css';

const Signup = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}></div>
    </div>
  );
};

export default Signup;
