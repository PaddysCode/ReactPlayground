import type { Dispatch } from "@reduxjs/toolkit";
import { MovieActions } from "./movieActions";


export const MovieService = {
  endPoints: {
    fetchAll: 'https://api.tvmaze.com/shows',  
  },

  async fetchAllMovies(dispatch: Dispatch) {

    try{
        const response = await fetch(this.endPoints.fetchAll,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
             }
            } 
        )
         if(!response.ok){
            throw new Error("Fetch Failed")
        }

        const data = await response.json();

        dispatch(MovieActions.initialLoading(data))

    }
    catch(error){
        console.error('Fetch failed:', error);
        throw error;
        
    }
    }
}
