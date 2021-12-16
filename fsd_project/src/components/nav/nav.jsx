import React from 'react';
import classes from "./nav.module.css";

import WrappedApp from "./navs";

const Nav = () =>{

    return <div className="row" className={classes.nav}>
        
        <div className="col-sm-2" className={classes.item} >
        <a href="#">
            <WrappedApp type="Technology"/>
            </a>
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp type="Dress"/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp type="Gadgets"/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp type="Coding"/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp type="Book"/>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
            <WrappedApp type="Traval"/>

            </a>
                
        </div>

    </div>
}

export default Nav;