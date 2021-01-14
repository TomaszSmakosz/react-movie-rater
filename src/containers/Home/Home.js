import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import MarkRibbon from '../../components/UI/MarkRibbon/MarkRibbon';


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
                        <div className={classes.MovieImageCardContainer}>
                            <div className={classes.MovieImageCardWrapper}>
                                <img src={imgSmall} className={classes.MovieImageCard}/>
                                <MarkRibbon/>
                            </div>
                        </div>
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
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon/>
                    </div>


                    <div className={classes.SelectionFrame}/>
                    <div className={classes.ChevronLeft}/>
                    <div className={classes.ChevronRight}/>
                </div>

            </Aux>
        );
    }
}

export default Home;