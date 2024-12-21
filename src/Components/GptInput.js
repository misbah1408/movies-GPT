import React, { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { useDispatch } from "react-redux";
import { addGptMoviesResult } from "../utils/gptSlice";
import MoviesSuggestion from "./MoviesSuggestion";

const GptInput = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_GEMINI_API_Key;

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

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    safetySetting,
  });

  const getMovie = async (name) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      if (!response.ok) throw new Error("Failed to fetch movie data");
      return await response.json();
    } catch (error) {
      console.error(`Error fetching movie "${name}":`, error);
      return null;
    }
  };

  const handleSearch = async () => {
    if (!searchText.current || !searchText.current.value.trim()) {
      alert("Please enter a search term.");
      return;
    }

    setLoading(true);

    const aiQuery = `Act as a Movie Recommendation system. Suggest 5 movie names based on the query: "${searchText.current.value}". Format the result as a comma-separated list (e.g., gadar, sholay, don, bahubali, jawan). If no movies match, respond with an error message and a user-friendly suggestion. Ensure the query movie name is included in the result if relevant. erroe message short with 5-6 words`;

    try {
      const result = await model.generateContent(aiQuery);
      const response = await result.response;
      const text = await response.text();
      // console.log(text);

      const movieArray = text.split(",").map((movie) => movie.trim());
      // console.log(movieArray)
      // console.log(text.slice(0,5))
      if (movieArray.length <= 1 || text.slice(0, 5) === "Error") {
        alert(text);
        return;
      } else {
        const movieData = await Promise.all(
          movieArray.map((name) => getMovie(name))
        );

        dispatch(
          addGptMoviesResult({
            movieNames: movieArray,
            movieResult: movieData.filter(Boolean), // Exclude null values
          })
        );
        setName(movieData.length);
      }
    } catch (error) {
      console.error("Error during AI query or movie fetching:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-[10rem] z-30 left-[50%] translate-x-[-50%] max-h-full w-full flex flex-col items-center md:m-auto">
        <div className="max-h-full w-[80%]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="h-10 md:w-[30%] flex md:m-auto w-full"
          >
            <input
              ref={searchText}
              className="md:bg-[rgba(0,0,0)] text-white h-10 w-[90%] border-none pl-7 outline-none rounded-l-lg border-2 border-white bg-[#47474779]"
              type="text"
              placeholder="What Do You Want Today?"
            />
            <button
              className="bg-[rgb(219,0,0)] outline-none w-[10%] h-10 rounded-r-lg"
              onClick={handleSearch}
              title="Search movies"
            >
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin text-white"></i>
              ) : (
                <i className="fa-solid fa-magnifying-glass text-white"></i>
              )}
            </button>
          </form>
        </div>
        {name > 2 && (
          <div className="md:m-auto h-[100%] w-[99%] md:my-5 my-8">
            {name > 2 && (
              <div className="w-[100%] md:text-3xl font-bold text-white text-2xl items-center text-center ">
                Movie Recommendations
              </div>
            )}
            <MoviesSuggestion />
          </div>
        )}
      </div>
    </>
  );
};

export default GptInput;
