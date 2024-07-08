import React, { useRef } from 'react';
import { API_OPTIONS, TOP_BG } from '../utils/Constants';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { useDispatch } from 'react-redux';
import { addGptMoviesResult } from '../utils/gptSlice';
import MoviesSuggestion from './MoviesSuggestion';

const GptInput = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_GEMINI_API_Key ;
  const genAI = new GoogleGenerativeAI(apiKey);
  const safetySetting = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySetting });
  const getMovie = async(name) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ name +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json()
    return json
  }
  const handleSearch = async () => {
    const aiQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example: gadar, sholay, don, bahubali, jawan (if there is no movie then please give an error message with a few words and tell user a message) and include movie name form query`;

    try {
      const result = await model.generateContent(aiQuery);
      const response = await result.response;
      const text = await response.text(); // Await the .text() method
      const movieArray = text.split(',').map(movie => movie.trim());
    
      // console.log(movieArray);
    
      if (movieArray.length <= 1) {
        // console.log(movieArray.length)
        alert(text);
      } else {
        const movieData = await Promise.all(
          movieArray.map(async (name) => {
            try {
              return await getMovie(name);
            } catch (error) {
              console.error(`Error fetching data for movie ${name}:`, error);
              return null;
            }
          })
        );
    
        // console.log(movieData);
        dispatch(addGptMoviesResult({movieNames: movieArray, movieResult: movieData}))
      }
    
      // console.log(text);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className='absolute top-[10rem] z-30 left-[50%] translate-x-[-50%] h-full w-full flex flex-col items-center m-auto'>
      <div className='h-[100%] w-[80%] '>
      <form onSubmit={(e) => e.preventDefault()} className=' h-10 w-[30%] flex m-auto'>
        <input ref={searchText} className='bg-[rgba(0,0,0)] text-white h-10 w-[90%] border-none pl-7 outline-none rounded-l-lg' type="text" placeholder='What Do You Want Today?' />
        <button className='bg-[rgb(219,0,0)] outline-none w-[10%] h-10 rounded-r-lg' onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </form>
      </div>
      <div className='m-auto h-[100%] w-[99%] my-5'>
        <h1 className='text-3xl font-bold text-white'>Movie Recommendation</h1>
        <MoviesSuggestion/>
      </div>
    </div>
  );
};

export default GptInput;
