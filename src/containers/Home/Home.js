import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary';

import imgBig from '../../assets/images/django_big.jpg';
import imgSmall from '../../assets/images/django_small.jpg';

import classes from './Home.css';

class Home extends Component{
    render() {
        return (
            <Aux>
                <div className={classes.TrailerReview}>
                    <div className={classes.Trailer}>
                        <img src={imgBig} className={classes.MovieTrailerImage}/>
                        <img src={imgSmall} className={classes.MovieImageCard}/>
                        <div className={classes.MovieTrailerImageGradient}/>
                    </div>
                    <div className={classes.ReviewList}>
                        <span>Reviews</span>
                        <div className={classes.Review}>
                            <div className={classes.ReviewGradient}/>
                        </div>
                        <div className={classes.Review}>
                            <div className={classes.ReviewGradient}/>
                        </div>
                    </div>
                </div>
                <div className={classes.MovieTrailerCarousel}>
                    <img src={imgSmall} className={classes.MovieImage}/>
                    <img src={imgSmall} className={classes.MovieImage}/>
                    <img src={imgSmall} className={classes.MovieImage}/>
                    <img src={imgSmall} className={classes.MovieImage}/>
                    <img src={imgSmall} className={classes.MovieImage}/>
                    <img src={imgSmall} className={classes.MovieImage}/>
                    <div className={classes.SelectionFrame}/>
                    <div className={classes.ChevronLeft}/>
                    <div className={classes.ChevronRight}/>
                </div>
            </Aux>
        );
    }
}

export default Home;