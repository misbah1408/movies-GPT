import React, { useEffect } from "react";
import { IMG_LINK } from "../utils/Constants";

const MovieCard = ({ movId, movImg, rate, movTitle }) => {
  if(!movImg) return null;
  if(rate <= 0.4) return null;
  // const [movie, setMovie] = React.useState({})
  // const [loading, setLoading] = React.useState(true)
  // const [error, setError] = React.useState(null)
  // const fetchImg = async()=>{
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movId}/images`,
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   // console.log(json?.backdrops[0].file_path)
  //   setMovie(json?.backdrops[1].file_path)
  // }
  // useEffect(()=>{
  //   fetchImg()
  // },[])

  const roundedRate = Math.round(rate*10);

  // Determine the color based on the rating
  const getRatingColor = (rating) => {
    if (rating <= 30) return "#FF3131";
    if (rating <= 60) return "#FFFF33";
    if(rating >= 61) return "#39FF14";
  };

  const ratingColor = getRatingColor(roundedRate);

  return (
    <div className="w-36 md:w-48 pr-4 flex-shrink-0">
      <div className="relative hover:scale-105 transition ease-in-out">
        <img
          className="rounded-sm border-gray-100 border-solid "
          src={IMG_LINK + movImg}
          alt={movTitle}
        />
        <div
          className={`absolute flex items-center justify-center h-[40px] w-[40px] bottom-1 ml-2 right-0 transform -translate-x-1/2 text-center text-white font-bold p-1 rounded-full bg-black border-[3px] text`}
          style={{ borderColor: ratingColor }}
        >
          <p className={`rounded-full text-[13px] text-white flex`}>{roundedRate} <sup className="mt-3">%</sup> </p>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-white font-bold text-sm">{movTitle}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
