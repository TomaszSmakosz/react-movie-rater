import React from 'react';

import raterLogo from '../../assets/images/movie_rater_logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={raterLogo} alt="MovieRater" />
    </div>
);

export default logo;