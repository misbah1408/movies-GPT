import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen absolute md:h-screen text-white bg-gradient-to-r from-[rgba(0,0,0,0.73)] p-11 rounded-md z-[5] ">
      <div className="md:mt-[15rem] mt-[20rem] md:ml-10 ml-0 ">
        <span className="font-bold text-4xl text-red-600 ">{title}</span>
        <p className="text-l md:w-1/3 mt-3 w-full ">{overview}</p>
        <div className="flex gap-3 mt-10">
          <button className="text-black bg-white p-4 rounded-sm px-9 ">
            <i className="fa-solid fa-play  mr-2"></i> Play
          </button>
          <button className="bg-[rgba(112,112,112,0.8)] p-4 rounded-sm">
            <i className="fa-solid fa-circle-info  mr-2"></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
