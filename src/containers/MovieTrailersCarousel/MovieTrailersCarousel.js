import React, {Component} from 'react';

import classes from './MovieTrailersCarousel.css';
import {connect} from "react-redux";
import ChevronButton from '../../components/UI/ChevronButton/ChevronButton';


import CarouselPage from './CarouselPage/CarouselPage';

class MovieTrailersCarousel extends Component{

    state = {
        selectionLeft: 30
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.carouselX = this.myRef.current.getBoundingClientRect().x;
    }

    onTrailerSelected(id,x){
        const left = x-this.carouselX-4;
        this.setState({selectionLeft: left});
        this.props.onSelectChanged(id);
    }
    render() {
        return (<div className={classes.MovieTrailerCarousel} ref={this.myRef}>
            <CarouselPage moviesList={this.props.moviesList}
                          onAddedToWatchlist={(id) => this.props.onAddedToWatchlist(id)}
                          onTrailerSelected={(id,x) => this.onTrailerSelected(id,x)}
            />
            <div style={{'left': this.state.selectionLeft}} className={classes.SelectionFrame}/>
            <ChevronButton type={'Left'}/>
            <ChevronButton type={'Right'}/>
        </div>);
    }
}
export default MovieTrailersCarousel;