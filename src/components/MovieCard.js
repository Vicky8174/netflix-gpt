import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div  className='w-48'>
         <img src={IMG_CDN_URL + poster_path}/>
    </div>
  )
}

export default MovieCard