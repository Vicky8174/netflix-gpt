import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies?.popularMovies);
    const topRatedMovies = useSelector((store) => store.movies?.topRated);
    const upcomingMovies = useSelector((store) => store.movies?.upcoming);

    if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) return null;

    return (
        <div className="bg-black text-white px-6 py-10">
            {/* Movie Sections */}
            <MovieSection title="Now Playing Movies" movies={nowPlayingMovies} />
            <MovieSection title="Popular Movies" movies={popularMovies} />
            <MovieSection title="Top Rated" movies={topRatedMovies} />
            <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
        </div>
    );
};

const MovieSection = ({ title, movies }) => (
    <div className="mb-10 overflow-x-auto pb-8 w-full scrollbar-hide ">
        <h2 className="text-4xl font-bold mb-4 relative text-center">
            {title}
            <span className="block w-auto h-1 bg-red-500 mx-auto mt-4"></span>
        </h2>
        <MovieList movie={movies} />
    </div>
);


export default SecondaryContainer;
