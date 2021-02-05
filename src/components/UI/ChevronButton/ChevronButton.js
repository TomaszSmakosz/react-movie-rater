import React from 'react';

import classes from './ChevronButton.css';

const chevronButton = (props) => {
    let chevron;
    if(props.type==='Right') {
        chevron = <div onClick={props.clicked} className={classes.ChevronRight}><svg id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.5 84.85" >
            <path d="M50,0" transform="translate(-0.25 -7.57)"/>
            <rect className={classes.cls1} x="20" y="2.32" width="10" height="60" transform="translate(-15.78 19.57) rotate(-45)"/>
            <rect className={classes.cls1} x="20" y="37.68" width="10" height="60" transform="translate(-5.43 125.64) rotate(-135)"/>
        </svg></div>
    }
    else{
        chevron = <div onClick={props.clicked} className={classes.ChevronLeft}><svg id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.5 84.85" >
            <path d="M50,0" transform="translate(-0.25 -7.57)"/>
            <rect className={classes.cls2} x="20" y="37.68" width="10" height="60" transform="translate(90.28 90.28) rotate(135)"/>
            <rect className={classes.cls2} x="20" y="2.32" width="10" height="60" transform="translate(29.93 -15.78) rotate(45)"/>
        </svg></div>
    }
    return (chevron);
}

export default chevronButton;