import React, { useState } from "react";
import classes from './about_account.module.css';

const AboutAccount = () => {
    const [classname, setClassname] = useState(classes.hide);

    function showAccountOptions() {
        classname == classes.hide ? setClassname(classes.show) : setClassname(classes.hide)
    }
    
    return <React.Fragment>
        <div className="col-md-1 col-sm-1">
            <a className={classes.aboutbtn}>About</a>
        </div>
        <div className="col-md-1 col-sm-1">
            <div className={classes.account_dropdown}>
                <button onClick={showAccountOptions} className={classes.dropdown_button}>pici</button>
                <div id={classname} className={classes.account_options}>
                    <a href="#home">Signout</a>
                    <a href="#about">Account</a>
                    <a href="#contact">Settings</a>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default AboutAccount;