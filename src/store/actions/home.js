import * as actionTypes from './actionTypes';

export const addToWatchlist = (id) => {
    return {
        type: actionTypes.ADD_TO_WATCHLIST,
        movieId: id
    };
};