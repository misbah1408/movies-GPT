import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const BgVideo = ({ movieId }) => {
  // console.log(movieId)
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="bg-gradient-to-r from-[rgba(0,0,0,0.98)] md:h-dvh h-[800px] overflow-y-hidden overflow-x-hidden">
      <iframe
        className="md:w-screen md:h-dvh w-[100%] h-1/2 brightness-100  transform scale-150 wi"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BgVideo;
