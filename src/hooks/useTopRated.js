import { useEffect  } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRated = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
             getNowPlayMovie();
    } , [])
     
    const getNowPlayMovie =  async()=>{
      const data  =  await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION)
  
      const json =  await data.json();
       
      console.log(json.results);
  
      dispatch(addTopRatedMovies(json.results));
  
    }
  
}

export default  useTopRated