import React from 'react';
import classes from "./nav.module.css";


const Nav = () =>{

    return <div className="col-md-3 col sm-3" className={classes.nav}>
        
        <input type="text" className={classes.search_here} />
            <button className={classes.submit}>Search</button>
            <ul className={classes.item}>
               <li> <a href="#">Electronic</a></li>
               <li> <a href="#">Sport</a></li>
               <li> <a href="#">Cloths</a></li>
               <li> <a href="#">Moblie</a></li>
               <li> <a href="#">Cloths</a></li>
            </ul>

    </div>
}

export default Nav;