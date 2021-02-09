import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions/home';

import MovieTrailersCarousel from "../MovieTrailersCarousel/MovieTrailersCarousel";
import MovieTrailerPreview from "../../components/MovieTrailerPreview/MovieTrailerPreview";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {selectedMovieTrailer: props.moviesList[0]}
    }

    onSelectChanged(id){
        const selectedMovieTrailer = this.props.moviesList
            .find(movieTrailer => {
                return movieTrailer.id === id;
        });
        this.setState({selectedMovieTrailer: selectedMovieTrailer});
    }

    render() {
        return (
            <Aux>
                <MovieTrailerPreview
                    movieTrailer={this.state.selectedMovieTrailer}
                    onAddedToWatchlist={(id) => this.props.onAddedToWatchlist(id)}
                />
                <MovieTrailersCarousel
                    onSelectChanged={id => this.onSelectChanged(id)}
                    moviesList={this.props.moviesList}
                    onAddedToWatchlist={(id) => this.props.onAddedToWatchlist(id)}
                />
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