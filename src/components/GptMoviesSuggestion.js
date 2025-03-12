import React from 'react'
import { useSelector } from 'react-redux'
import  MovieList from './MovieList'

const GptMoviesSuggestion = () => {
    const{movieResults,movieNames} = useSelector((state)=>state.gpt)
    if(!movieNames) return null;
    
  return (
    <div className="lex flex-col relative z-10 justify-center min-h-screen py-4 px-2">
      <h1 className="text-white text-2xl font-bold mb-4">Movie Suggestions</h1>
      {movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movie={movieResults[index]} />
      ))}
    </div>

  )
}

export default GptMoviesSuggestion