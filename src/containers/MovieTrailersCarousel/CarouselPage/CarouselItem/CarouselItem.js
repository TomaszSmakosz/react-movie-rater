import React, {useRef, useEffect} from 'react';
import classes from "./CarouselItem.css";
import imgSmall from "../../../../assets/images/django_small.jpg";
import MarkRibbon from "../../../../components/UI/MarkRibbon/MarkRibbon";

function CarouselItem (props) {
//const CarouselItem = (props) => {
    const itemRef = useRef(null);
    useEffect(()=>{
        if(props.index===0){
            props.onTrailerSelected(props.movieId, itemRef.current.getBoundingClientRect().x);
        }
    },[]);
    return (
    <div className={classes.CarouselItem} ref={itemRef}>
        <img
            src={imgSmall}
            className={classes.CarouselItemMovieImage}
            onClick={() => props.onTrailerSelected(props.movieId, itemRef.current.getBoundingClientRect().x)}/>
        <MarkRibbon clicked={() => props.onAddedToWatchlist(props.movieId)}/>
    </div>);
}

export default CarouselItem;