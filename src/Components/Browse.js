import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainSection from './MainSection';
import SecondarySection from './SecondarySection';

const Browse = () => {
  useNowPlayingMovies();
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