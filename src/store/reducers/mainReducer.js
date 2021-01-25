import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    watchList: [1]
};

const addToWatchlist = (state, action) => {
    const updatedWatchlist = { watchList: [...state.watchList] }
    updatedWatchlist.watchList.push(action.movieId);
    return updateObject(state, updatedWatchlist);
};

// const removeFromWatchlist = (state, action) => {
//
//     return updateObject(state, updatedState);
// };

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_WATCHLIST: return addToWatchlist(state, action);
        //case actionTypes.REMOVE_FROM_WATCHLIST: return removeIngredient(state, action);
        default: return state;
    }
};

export default mainReducer;