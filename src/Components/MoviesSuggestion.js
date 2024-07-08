import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

function MoviesSuggestion() {
  const { movieNames, movieResult } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResult) {
    return null;
  }
//   console.log(movieResult[0])
  return (
    <div className=' bg-[#000000e9] overflow-hidden my-5 rounded-lg'>
      <div className="movies">
        {movieNames?.map((title, index) => (
          <MovieList key={title} title={title} movies={movieResult[index]?.results} />
        ))}
      </div>
    </div>
  );
}

export default MoviesSuggestion;
