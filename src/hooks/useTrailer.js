import React , { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const useTrailer = (movieId)=>{
    const dispatch = useDispatch()

    const getMovieVideos = async() =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos` , API_OPTION);
        const json  =  await data.json()
        console.log("video data",json)

        const filterData =  json.results.filter((video) => video.type == "Trailer");

        const trailer =  filterData ? filterData[0] : json.results[0];
        console.log(filterData);
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
         
     }
     useEffect(()=>{
           getMovieVideos();
     }, [])



}


export default useTrailer ;