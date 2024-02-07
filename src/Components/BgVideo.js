import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const BgVideo = ({ movieId }) => {
    
    const trailerVideo = useSelector((store)=> store?.movies?.trailerVideo)
    useMovieTrailer(movieId)
  return (
    <div className="bg-gradient-to-r from-[rgba(0,0,0,0.98)] h-dvh overflow-y-hidden overflow-x-hidden">
      <iframe
      className="w-screen h-dvh brightness-100  transform scale-150 wi"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BgVideo;
