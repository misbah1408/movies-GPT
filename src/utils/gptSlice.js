import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState :{
        showGptSearch: false,
        movieResult: null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult : (state, action) =>{
            const {movieNames, movieResult} = action.payload;
            state.movieResult = movieResult;
            state.movieNames = movieNames;
        }
    }
})

export const {toggleGptSearchView,addGptMoviesResult} = gptSlice.actions;
export default gptSlice.reducer