import React from 'react';
import classes from './logo_title.module.css';

const LogoTitle = () => {
    return <React.Fragment>
        <div className="col-md-1 col-sm-1">
            <button className={classes.logo}>PIC</button>
        </div>
        <div className="col-md-2 col-sm-2">
            <h2 className={classes.title}>Website Name</h2>
        </div>
    </React.Fragment>
}

export default LogoTitle;