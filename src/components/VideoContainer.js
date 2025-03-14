import { useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';

const VideoContainer = ({ movieId, title, view }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useTrailer(movieId);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Conditional Rendering to Prevent Broken Video Embed */}
      {trailerVideo?.key ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-lg">
          Loading Trailer...
        </div>
      )}

      {/* Overlay Content with Responsive Layout */}
      <div className="absolute inset-y-0 left-0 flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ml-4 md:ml-8 lg:ml-12 ">
        <h1 className="text-white text-xl sm:text-md md:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-3 md:mb-4 lg:mb-5">
          {title}
        </h1>
        {/* Conditionally Render View Text on Larger Screens */}
        {view && (
          <p className="hidden sm:block text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            {view}
          </p>
        )}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-red-600 text-white py-2 px-3 sm:py-3 sm:px-5 rounded hover:bg-red-700 transition-all duration-300">
            Play
          </button>
          {/* Hide "More Info" button on small screens */}
          <button className="hidden sm:block bg-gray-600 text-white py-2 px-3 sm:py-3 sm:px-5 rounded hover:bg-gray-700 transition-all duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
