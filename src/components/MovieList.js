import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movie}) => {
  return (
    <div className="bg-black bg-opacity-40 text-white py-12 w-full rounded-lg">
      <div className="px-12 mb-4">
        <h2 className="text-center text-2xl md:text-3xl font-medium">
          {title}
        </h2>
      </div>
      
      <div className="relative group w-full">
        {/* Left scroll button */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-12 h-12 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center font-bold">
          &#10094;
        </button>
        
        {/* Right scroll button */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-12 h-12 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center font-bold">
          &#10095;
        </button>
        
        {/* Movie row */}
        <div className="overflow-x-auto pb-8 w-full scrollbar-hide">
          <div className="flex gap-4 pl-12 pr-12">
            {movie.map((movie) => (
              <div key={movie.id} className=" flex-none w-52 transition-transform duration-300 hover:scale-105 relative group/item">
                <MovieCard poster_path={movie.poster_path} />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



export default MovieList