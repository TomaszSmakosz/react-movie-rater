import logo from './logo.svg';
import classes from './App.css';
import React, { Component } from "react";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import * as actions from "./store/actions/home";

function App() {
  return (
    <div className={classes.App}>
        <Layout>
            <Home/>
        </Layout>
    </div>
  );
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

export default App;
