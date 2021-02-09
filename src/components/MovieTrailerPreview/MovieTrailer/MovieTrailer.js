import React from 'react'
import classes from "./MovieTrailer.css";
import MarkRibbon from "../../UI/MarkRibbon/MarkRibbon";
import PlayButton from "../../UI/PlayButton/PlayButton";

const MovieTrailer = (props) => {
    return (
        <div className={classes.MovieTrailer}>
            <img src={props.movieTrailer.bigImgUrl} className={classes.MovieTrailerImage}/>
            <div className={classes.MovieImageCardContainer}>
                <div className={classes.MovieImageCardWrapper}>
                    <img src={props.movieTrailer.smallImgUrl} className={classes.MovieImageCard}/>
                    <MarkRibbon clicked={() => props.onAddedToWatchlist(props.movieTrailer.id)}/>
                </div>
            </div>
            <div className={classes.MovieTrailerControlsContainer}>
                <div className={classes.MovieTrailerPlayButtonWrapper}>
                    <PlayButton/>
                </div>
                <div className={classes.MovieTrailerTextWrapper}>
                    <div className={classes.MovieTrailerTitleAndLengthWrapper}>
                        <span className={classes.MovieTrailerTitle}>
                            {props.movieTrailer.movieName}
                        </span>
                        <div className={classes.MovieTrailerLengthWrapper}>
                            <span className={classes.MovieTrailerLength}>
                                {props.movieTrailer.time}
                            </span>
                        </div>
                    </div>
                    <span className={classes.MovieTrailerDescription}>
                        {props.movieTrailer.info}
                    </span>
                </div>
            </div>
            <div className={classes.MovieTrailerImageGradient}/>
        </div>
    );
}

export default MovieTrailer;