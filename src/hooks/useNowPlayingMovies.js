import { useEffect  } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
             getNowPlayMovie();
    } , [])
     
    const getNowPlayMovie =  async()=>{
      const data  =  await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1" ,API_OPTION);
  
      const json =  await data.json();
       
      console.log(json.results);
  
      dispatch(addNowPlayingMovies(json.results));
  
    }
  
}

export default useNowPlayingMovies