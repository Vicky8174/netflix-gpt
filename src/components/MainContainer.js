import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if (!movies) return null;
    const movieData = movies[0];

    const { original_title, overview, id } = movieData;

    return (
        <div className="relative w-full bg-black text-white">
            <VideoTitle title={original_title} view={overview} />
            <div className="relative z-10">
                <VideoContainer movieId={id} title={original_title} view={overview} />
            </div>
        </div>
    );
};

export default MainContainer;
