import React from 'react';
import classes from "./dit.module.css";
import Comment from "./commant";
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './block';


const Details = () => {
    const class1 = " col-sm-4 col-md-4 " + classes.item
    const class2 = " col-sm-7 col-md-7 "

    return <div className="container">
        <h1 className={classes.hadding}>Block detail</h1>
        <div className="row">
            <div className={class2} >
                <StyledEngineProvider injectFirst>
                    <Demo />
                </StyledEngineProvider>

                <div className='mt-4'><h1>Block Description</h1></div>
                <div>
                    <ul>
                        <li>2.3GHz Qualcomm Snapdragon 720G with 8nm octa core processor,</li>
                        <li>2.3GHz Qualcomm Snapdragon 720G with 8nm octa core processor,</li>
                        <li>6.94 centimeters (6.67-inch) FHD+ full screen dot display LCD multi-touch capacitive touchscreen with 2400 x 1080 pixels resolution</li>
                        <li>5020mAh lithium-polymer large battery providing talk-time of 29 hours and</li>
                        <li>Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual SIM (nano+nano) + Dedicated SD card slot</li>
                    </ul>
                </div>

            </div>

            <div className={class1} >
                
<Comment></Comment>

            </div>
        </div>
    </div>
}

export default Details;