import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainSection from './MainSection';
import SecondarySection from './SecondarySection';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcoming from '../Hooks/useUpcoming';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store)=>store?.gpt?.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  return (
    <div>
        <Header/>
        {showGptSearch? (
        <GPTsearch/>
        ) : (
        <>
          <MainSection/>
          <SecondarySection/>
        </>)}
        
    </div>
  )
}

export default Browse


//mohammedmisbah00008@gmail.com
//Mm353191_