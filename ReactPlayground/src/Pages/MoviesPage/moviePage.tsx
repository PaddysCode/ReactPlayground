import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";


const MoviePage: React.FC = () =>{

    const dispatch = useDispatch();

    const {isInitialized, movies} = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        if(!isInitialized){
            
        }
    }, []);

     return (
        <>
          <h1>Hallo</h1>
        </>
    );

}
   
export default MoviePage;