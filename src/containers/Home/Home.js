import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions/home';

import MovieTrailersCarousel from "../MovieTrailersCarousel/MovieTrailersCarousel";
import MovieTrailerPreview from "../../components/MovieTrailerPreview/MovieTrailerPreview";

class Home extends Component{
    render() {
        return (
            <Aux>
                <MovieTrailerPreview/>
                <MovieTrailersCarousel/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        watchList: state.watchList,
        moviesList: state.moviesList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedToWatchlist: (movieId) => dispatch(actions.addToWatchlist(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);