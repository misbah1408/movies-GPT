import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainSection from './MainSection';
import SecondarySection from './SecondarySection';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcoming from '../Hooks/useUpcoming';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  return (
    <div>
        <Header/>
        <MainSection/>
        <SecondarySection/>
    </div>
  )
}

export default Browse


//mohammedmisbah00008@gmail.com
//Mm353191_