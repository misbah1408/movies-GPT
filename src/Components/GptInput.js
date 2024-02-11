import React, { useRef } from 'react'
import { TOP_BG } from '../utils/Constants'
import openai from '../utils/Openai';

const GptInput = () => {
  const searchText = useRef(null);
  const handleSearch = async() => {
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    "only give me names of 5 Movies, comma seperated like the example result given ahead. Example like gadar, solay,don ,bahubali,jawan"
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: "give me some movies" }],
      model: 'gpt-3.5-turbo',
    });
    // console.log(gptResults)
  }
  return (
    <div>
      <div className=" relative">
          <img
            src={TOP_BG}
            className="bg-gradient-to-t from-black brightness-75"
            alt=""
          />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute top-[10rem] z-30 left-[50%] translate-x-[-50%] h-10] w-[30%] flex '>
            <input ref={searchText} className='bg-[rgba(0,0,0)] text-white h-10 w-[90%] border-none pl-7 outline-none rounded-l-lg' type="text" placeholder='What Do You Want Today?'/>
            <button className='bg-[rgb(219,0,0)] outline-none w-[10%] h-10 rounded-r-lg' onClick={handleSearch}><i className="fa-solid fa-magnifying-glass text-white"></i></button>
        </form>
    </div>
  )
}

export default GptInput
