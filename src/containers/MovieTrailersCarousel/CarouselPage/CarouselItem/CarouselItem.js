import React from 'react';
import classes from "./CarouselItem.css";
import imgSmall from "../../../../assets/images/django_small.jpg";
import MarkRibbon from "../../../../components/UI/MarkRibbon/MarkRibbon";

const carouselItem = (props) => {
    return (
    <div className={classes.CarouselItem}>
        <img src={imgSmall} className={classes.CarouselItemMovieImage}/>
        <MarkRibbon clicked={() => props.onAddedToWatchlist(props.movieId)}/>
    </div>);
}

export default carouselItem;