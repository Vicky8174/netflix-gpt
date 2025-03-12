import { useEffect  } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcoming } from "../utils/movieSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
             getNowPlayMovie();
    } , [])
     
    const getNowPlayMovie =  async()=>{
      const data  =  await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)
  
      const json =  await data.json();
       
      console.log(json.results);
  
      dispatch(addUpcoming(json.results));
  
    }
  
}

export default  useUpcoming