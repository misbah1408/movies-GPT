import React from 'react'
import GptInput from './GptInput'
import { TOP_BG } from '../utils/Constants'



const GPTsearch = () => {
  return (
    <div>
      <div className="fixed top-0">
        <img
          src={TOP_BG}
          className="bg-gradient-to-t from-black brightness-75"
          alt="" 
        />
      </div>
      <div className='flex flex-col'>
        <GptInput />
      </div>
    </div>
  )
}

export default GPTsearch
