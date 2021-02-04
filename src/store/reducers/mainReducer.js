import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    watchList: [],
    moviesList: [
        {
            id: "xyz1",
            imgUrl: "not_assigned",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
        },
        {
            id: "xyz12",
            imgUrl: "not_assigned",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
        },
        {
            id: "xyz123",
            imgUrl: "not_assigned",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
        },
        {
            id: "xyz1234",
            imgUrl: "not_assigned",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
        },
        {
            id: "xyz12345",
            imgUrl: "not_assigned",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
        },
        {
            id: "xyz123456",
            imgUrl: "not_assigned",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
        },
    ]
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