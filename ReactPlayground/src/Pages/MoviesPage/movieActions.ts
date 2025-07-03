import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: 'movies', 
  initialState: {
    movies: [],
    isInitialized: false
  },
  reducers: {

    initialLoading : (state, action) => {
        return {
            ...state,
            movies: action.payload,
            isInitialized: true
        }
    }}

});


export const MovieActions = moviesSlice.actions