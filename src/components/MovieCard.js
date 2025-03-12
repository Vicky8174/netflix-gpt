import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ poster_path, title }) => {
  return (
    <div className="h-[288px] w-52 bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img 
        src={IMG_CDN_URL + poster_path} 
        alt={title} 
        className="w-full h-72 object-cover"
      />
      
      <div className="p-3 text-center">
        <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;