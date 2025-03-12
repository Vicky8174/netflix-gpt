import React, { useRef } from 'react';
import gemni from '../utils/geminiai';
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGPtSearch = async () => {
    const query = searchText.current.value.trim();

    if (!query) {
      alert("Please enter a movie name or genre to search!"); // Popup alert
      return;
    }

    const searchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    gemni(searchQuery, dispatch);
  };

  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="w-full max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Find Your Next Favorite Movie</h2>
          <p className="text-gray-300 text-lg">Search by title, genre, actor, or just describe what you're in the mood for</p>
        </div>
        
        <form 
          className="flex flex-col sm:flex-row items-center gap-4 w-full" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full">
            <input
              ref={searchText}
              type="text"
              className="w-full p-4 pr-12 rounded-md bg-gray-800 bg-opacity-80 text-white placeholder-gray-400 border-2 border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all duration-300 text-lg shadow-lg"
              placeholder="What do you want to watch today?"
            />
            
          </div>
          
          <button
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 shadow-lg text-lg"
            onClick={handleGPtSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;