import React from 'react';
import classes from "./nav.module.css";


const Nav = () =>{

    return <div className="row" className={classes.nav}>
        
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
                 <img src="../image/computer.jpg"/>
                 <p>Computer</p>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
                 <img src="../image/phone.jpg"/>
                 <p>Mobile</p>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
                 <img src="../image/clothe.jpg"/>
                 <p>Clothe</p>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
                 <img src="../image/TV.jpg"/>
                 <p>Television</p>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
                 <img src="../image/hd.jpg"/>
                 <p>HeadPhone</p>

            </a>
                
        </div>
        <div className="col-sm-2" className={classes.item} >
            <a href="#">
                 
                 <img src="../image/computer.jpg"/>
                 <p>Kitchen</p>

            </a>
                
        </div>

    </div>
}

export default Nav;