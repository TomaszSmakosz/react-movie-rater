import React from 'react';

import classes from './CarouselPage.css';

import CarouselItem from './CarouselItem/CarouselItem';

const carouselPage = (props) => {
    let carouselItems = Object.values(props.moviesList)
        .map( (item,index) => {
            return (
                <CarouselItem
                    movieId={item.id}
                    onAddedToWatchlist={(id) => props.onAddedToWatchlist(id)}
                    onTrailerSelected={(id,x) => props.onTrailerSelected(id,x)}
                    index={index}
                />
            );
        });

    return (carouselItems);
}

export default carouselPage;