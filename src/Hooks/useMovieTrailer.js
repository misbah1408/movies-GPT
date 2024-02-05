import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filteredTrailer = json?.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filteredTrailer.length
          ? filteredTrailer[0]
          : json?.results[0];
        dispatch(addTrailerVideo(trailer))
      };
      useEffect(() => {
        getMovieVideo();
      }, []);
}

export default useMovieTrailer
