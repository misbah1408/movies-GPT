import React from 'react'
import { IMG_LINK } from '../utils/Constants'

const MovieCard = ({poster_path}) => {
  return (
    <div >
      <img className='rounded-sm border-gray-100 border-solid' src={IMG_LINK + poster_path} alt="" />
    </div>
  )
}

export default MovieCard
