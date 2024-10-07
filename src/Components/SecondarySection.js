import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondarySection = () => {
  const movies = useSelector((store) => store?.movies);
  const nowPlayingMoviesID = movies.nowPlayingMovies?.map((id) => id?.id);
  const topRatedID = movies.topRated?.map((id) => id?.id);
  const popularMoviesID = movies.popularMovies?.map((id) => id?.id);
  const upcomingID = movies.upcoming?.map((id) => id?.id);

  return (
    <>{
      nowPlayingMoviesID &&
      <div className=" absolute md:-mt-40 z-40 -mt-10">
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies}
          movieFimgId={nowPlayingMoviesID}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies?.topRated}
          movieFimgId={topRatedID}
        />
        <MovieList
          title={"Popular"}
          movies={movies?.popularMovies}
          movieFimgId={popularMoviesID}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies?.upcoming}
          movieFimgId={upcomingID}
        />
      </div>}
    </>
  );
};

export default SecondarySection;
