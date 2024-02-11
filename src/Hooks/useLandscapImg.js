import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addLandscapeImg } from "../utils/movieSlice";
import { useEffect } from "react";

const useLandscapImg = () => {

  const movies = useSelector((store)=>store?.movies)
  const nowPlayingMoviesID = movies.nowPlayingMovies?.map((id)=>id?.id);
  console.log(nowPlayingMoviesID)
  const dispatch = useDispatch();
  const getLandscapImg = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${nowPlayingMoviesID}/images`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addLandscapeImg(json?.posters));
  };
  useEffect(() => {
    getLandscapImg();
  }, []);

};

export default useLandscapImg;
