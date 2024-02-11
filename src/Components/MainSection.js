import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import BgVideo from './BgVideo'

const MainSection = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[3];
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <BgVideo movieId={id}/>
    </div>
  )
}

export default MainSection
