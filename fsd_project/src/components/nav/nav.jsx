import React from 'react';
import classes from "./nav.module.css";

import WrappedApp from "./navs";

const Nav = () =>{

    return <div className="row" className={classes.nav}>
        
        <div className="col-sm-2" className={classes.item} >
        <a href="#">
            <WrappedApp/>
            </a>
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp/>

            </a>
                
        </div>

    </div>
}

export default Nav;