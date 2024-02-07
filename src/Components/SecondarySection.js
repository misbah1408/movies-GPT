import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondarySection = () => {
  const movies = useSelector((store)=>store?.movies)
  return (
    <div className=' absolute -mt-40 z-40'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRated}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcoming}/>
    </div>
  )
}

export default SecondarySection
