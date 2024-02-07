import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcoming(json?.results));
  };
  useEffect(() => {
    getUpcoming();
  }, []);

};

export default useUpcoming;
