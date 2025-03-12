import { createSlice } from "@reduxjs/toolkit";

const gptSlice  =  createSlice({
    name:"gpt",
    initialState:{
        showGptSearch : false,
        movieResults:null,
        movieNames:null

    },
    reducers:{
          toggleGptSearch : (state)=>{
              state.showGptSearch = !state.showGptSearch;
          },
          addGptMovies:(state,action)=>{
        
            state.movieResults =  action.payload
          },
          addGptName:(state,action)=>{
            state.movieNames = action.payload
          }
    }

})

export  const {toggleGptSearch , addGptMovies ,addGptName} = gptSlice.actions;

export  default gptSlice.reducer ;