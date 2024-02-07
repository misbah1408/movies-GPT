import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen absolute h-screen text-white bg-gradient-to-r from-[rgba(0,0,0,0.73)] p-11 rounded-md z-[5] '>
      <div className='mt-[20rem] ml-20'>
      <span className='font-bold text-6xl text-red-600'>{title}</span>
      <p className='text-xl w-1/3 mt-3 '>{overview}</p>
      </div>
    </div>
  )
}

export default VideoTitle
