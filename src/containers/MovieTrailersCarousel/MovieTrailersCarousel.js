import React, {Component} from 'react';

import classes from './MovieTrailersCarousel.css';
import {connect} from "react-redux";
import * as actions from "../../store/actions/home";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import ChevronButton from '../../components/UI/ChevronButton/ChevronButton';


import CarouselPage from './CarouselPage/CarouselPage';

class MovieTrailersCarousel extends Component{

    state = {
        selectionLeft: 30
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        console.log(this.myRef);
    }

    componentDidMount() {
        this.carouselX = this.myRef.current.getBoundingClientRect().x;
    }

    onTrailerSelected(id,x){
        const left = x-this.carouselX-4;
        this.setState({selectionLeft: left});
    }

    onSelectChanged(x){

    }

    render() {
        return (<div className={classes.MovieTrailerCarousel} ref={this.myRef}>
            <CarouselPage moviesList={this.props.moviesList}
                          onAddedToWatchlist={(id) => this.props.onAddedToWatchlist(id)}
                          onTrailerSelected={(id,x) => this.onTrailerSelected(id,x)}/>
            <div style={{'left': this.state.selectionLeft}} className={classes.SelectionFrame}/>
            <ChevronButton type={'Left'}/>
            <ChevronButton type={'Right'}/>
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