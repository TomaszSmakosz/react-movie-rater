import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import MarkRibbon from '../../components/UI/MarkRibbon/MarkRibbon';
import PlayButton from '../../components/UI/PlayButton/PlayButton';
import * as actions from '../../store/actions/home';


import imgBig from '../../assets/images/django_big.jpg';
import imgSmall from '../../assets/images/django_small.jpg';


import classes from './Home.css';

class Home extends Component{
    render() {
        return (
            <Aux>
                <div className={classes.TrailerReview}>
                    <div className={classes.Trailer}>
                        <img src={imgBig} className={classes.MovieTrailerImage}/>
                        <div className={classes.MovieImageCardContainer}>
                            <div className={classes.MovieImageCardWrapper}>
                                <img src={imgSmall} className={classes.MovieImageCard}/>
                                <MarkRibbon clicked={() => this.props.onAddedToWatchlist(1)}/>
                            </div>
                        </div>
                        <div className={classes.TrailerControlsContainer}>
                            <div className={classes.TrailerPlayButtonWrapper}>
                                <PlayButton/>
                            </div>
                            <div className={classes.TrailerTextWrapper}>
                                <div className={classes.TrailerTitleAndLengthWrapper}>
                                <span className={classes.TrailerTitle}>
                                    Django Django Django Django Django
                                </span>
                                    <div className={classes.TrailerLengthWrapper}>
                                    <span className={classes.TrailerLength}>
                                        2:37
                                    </span>
                                    </div>
                                </div>
                                <span className={classes.TrailerDescription}>
                                    Watch the Trailer
                                </span>
                            </div>
                        </div>
                        <div className={classes.MovieTrailerImageGradient}/>
                    </div>
                    <div className={classes.ReviewList}>
                        <span>Reviews</span>
                        <div className={classes.Review}>
                            <div className={classes.ReviewGradient}/>
                        </div>
                        <div className={classes.Review}>
                            <div className={classes.ReviewGradient}/>
                        </div>
                    </div>
                </div>
                <div className={classes.MovieTrailerCarousel}>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon clicked={() => this.props.onAddedToWatchlist(1)}/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon clicked={() => this.props.onAddedToWatchlist(2)}/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon clicked={() => this.props.onAddedToWatchlist(3)}/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon clicked={() => this.props.onAddedToWatchlist(4)}/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon clicked={() => this.props.onAddedToWatchlist(5)}/>
                    </div>
                    <div className={classes.MovieImageWrapper}>
                        <img src={imgSmall} className={classes.MovieImage}/>
                        <MarkRibbon clicked={() => this.props.onAddedToWatchlist(6)}/>
                    </div>


                    <div className={classes.SelectionFrame}/>
                    <div className={classes.ChevronLeft}/>
                    <div className={classes.ChevronRight}/>

                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        watchList: state.watchList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedToWatchlist: (movieId) => dispatch(actions.addToWatchlist(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);