import React from 'react';
import { BsStarFill } from "react-icons/all";

import classes from './MarkRibbon.css';

const markRibbon = (props) => (
    <div className={classes.MarkRibbon}>
        <div className={classes.StarWrapper}>
            <BsStarFill className={classes.Star}/>
        </div>
        <svg id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" className={classes.MarkRibbonImage}>
            <polygon className="cls-1" points="0 0 0 150 50 104.42 100 150 100 0 0 0"/>
        </svg>


    </div>

);

export default markRibbon;