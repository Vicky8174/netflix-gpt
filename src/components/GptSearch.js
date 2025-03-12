import React from "react";
import { bgImg } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900">
      {/* Background Image with Fixed Position */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
        {/* Search Bar */}
        <GptSearchBar />

        {/* Movie Suggestions */}
        <div className="w-full max-w-4xl mt-12">
          <GptMoviesSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
