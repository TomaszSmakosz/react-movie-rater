import React from 'react'
import classes from './MovieTrailerPreview.css';
import MovieTrailer from "./MovieTrailer/MovieTrailer";
import ReviewList from "./ReviewList/ReviewList";

const MovieTrailerPreview = (props) => {
    return (
        <div className={classes.MovieTrailerPreview}>
            <MovieTrailer/>
            <ReviewList/>
        </div>
    );
}

export default MovieTrailerPreview;