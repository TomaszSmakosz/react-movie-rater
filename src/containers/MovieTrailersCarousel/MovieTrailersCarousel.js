import React, {Component} from 'react';

import classes from './MovieTrailersCarousel.css';
import {connect} from "react-redux";
import * as actions from "../../store/actions/home";
import Aux from "../../hoc/Auxiliary/Auxiliary";


import CarouselPage from './CarouselPage/CarouselPage';

class MovieTrailersCarousel extends Component{
    render() {
        return (<div className={classes.MovieTrailerCarousel}>
            <CarouselPage moviesList={this.props.moviesList}
                          onAddedToWatchlist={(id) => this.props.onAddedToWatchlist(id)}/>
            <div className={classes.SelectionFrame}/>
            <div className={classes.ChevronLeft}/>
            <div className={classes.ChevronRight}/>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        moviesList: state.moviesList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedToWatchlist: (movieId) => dispatch(actions.addToWatchlist(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTrailersCarousel);