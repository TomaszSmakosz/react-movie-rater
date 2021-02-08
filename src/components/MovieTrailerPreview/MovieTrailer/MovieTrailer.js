import React from 'react'
import classes from "./MovieTrailer.css";
import imgBig from "../../../assets/images/django_big.jpg";
import imgSmall from "../../../assets/images/django_small.jpg";
import MarkRibbon from "../../UI/MarkRibbon/MarkRibbon";
import PlayButton from "../../UI/PlayButton/PlayButton";

const MovieTrailer = (props) => {
    return (
        <div className={classes.MovieTrailer}>
            <img src={imgBig} className={classes.MovieTrailerImage}/>
            <div className={classes.MovieImageCardContainer}>
                <div className={classes.MovieImageCardWrapper}>
                    <img src={imgSmall} className={classes.MovieImageCard}/>
                    <MarkRibbon clicked={() => this.props.onAddedToWatchlist(1)}/>
                </div>
            </div>
            <div className={classes.MovieTrailerControlsContainer}>
                <div className={classes.MovieTrailerPlayButtonWrapper}>
                    <PlayButton/>
                </div>
                <div className={classes.MovieTrailerTextWrapper}>
                    <div className={classes.MovieTrailerTitleAndLengthWrapper}>
                                <span className={classes.MovieTrailerTitle}>
                                    Django Django Django Django Django
                                </span>
                        <div className={classes.MovieTrailerLengthWrapper}>
                                    <span className={classes.MovieTrailerLength}>
                                        2:37
                                    </span>
                        </div>
                    </div>
                    <span className={classes.MovieTrailerDescription}>
                                    Watch the Trailer
                                </span>
                </div>
            </div>
            <div className={classes.MovieTrailerImageGradient}/>
        </div>
    );
}

export default MovieTrailer;