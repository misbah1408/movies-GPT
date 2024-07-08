import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useMovieTrailer = (movieId) => {
  // console.log(movieId)
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json)
    const filteredTrailer = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json?.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log(filteredTrailer)
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
