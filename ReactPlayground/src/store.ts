import { configureStore } from '@reduxjs/toolkit';
import {  moviesSlice } from './Pages/MoviesPage/movieActions';

export const store = configureStore({
  reducer: {
    'movies': moviesSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
