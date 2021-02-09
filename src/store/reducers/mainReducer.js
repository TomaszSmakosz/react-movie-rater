import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    watchList: [],
    moviesList: [
        {
            id: "xyz1",
            smallImgUrl: "https://i.imgur.com/GimFZPl.jpg",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            bigImgUrl: "https://i.imgur.com/RLINeIT.jpeg",
            info: "Watch Trailer",
            time: "2:37"
        },
        {
            id: "xyz12",
            smallImgUrl: "https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX280_CR0,0,280,414_.jpg",
            movieName: "Coming 2 America",
            description: "The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son.",
            bigImgUrl: "https://m.media-amazon.com/images/M/MV5BZTE1MzA0NWQtODA0Ny00MDViLWIzNzEtNWY3YjkyZDk3OGJjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_QL40_UX1000_CR0,0,1000,563_.jpg%201000w",
            info: "Watch the Super Bowl Spot",
            time: "0:31"
        },
        {
            id: "xyz123",
            smallImgUrl: "https://i.imgur.com/GimFZPl.jpg",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            bigImgUrl: "https://i.imgur.com/RLINeIT.jpeg",
            info: "Watch Trailer",
            time: "2:37"
        },
        {
            id: "xyz1234",
            smallImgUrl: "https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX280_CR0,0,280,414_.jpg",
            movieName: "Coming 2 America",
            description: "The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son.",
            bigImgUrl: "https://m.media-amazon.com/images/M/MV5BZTE1MzA0NWQtODA0Ny00MDViLWIzNzEtNWY3YjkyZDk3OGJjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_QL40_UX1000_CR0,0,1000,563_.jpg%201000w",
            info: "Watch the Super Bowl Spot",
            time: "0:31"
        },
        {
            id: "xyz12345",
            smallImgUrl: "https://i.imgur.com/GimFZPl.jpg",
            movieName: "Django",
            description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            bigImgUrl: "https://i.imgur.com/RLINeIT.jpeg",
            info: "Watch Trailer",
            time: "2:37"
        },
        {
            id: "xyz123456",
            smallImgUrl: "https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX280_CR0,0,280,414_.jpg",
            movieName: "Coming 2 America",
            description: "The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son.",
            bigImgUrl: "https://m.media-amazon.com/images/M/MV5BZTE1MzA0NWQtODA0Ny00MDViLWIzNzEtNWY3YjkyZDk3OGJjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_QL40_UX1000_CR0,0,1000,563_.jpg%201000w",
            info: "Watch the Super Bowl Spot",
            time: "0:31"
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