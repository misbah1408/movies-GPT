import React, { useState } from "react";
import Header from "./Header";
import { TOP_BG } from "../utils/Constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleLogin = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <div className=" relative">
          <img
            src={TOP_BG}
            className="bg-gradient-to-t from-black brightness-50"
            alt=""
          />
        </div>
        <form className="absolute flex flex-col h-[35rem] w-[450px] py-12 px-16 mx-auto right-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-xl top-32 gap-5">
          <span className="text-white font-semiboldbold text-4xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </span>
          {!isSignIn && (
            <input
              type="text"
              placeholder="First Name"
              className="h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px] outline-none focus:text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email address"
            className="h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px] outline-none focus:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px] outline-none focus:text-white"
          />
          <button className="h-10 mt-5 text-white text-l rounded-md bg-[rgb(219,0,0)]">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white text-sm my-3 cursor-pointer"
            onClick={toggleLogin}
          >
            {isSignIn ? "New to Netflix? " : "Already Registered? "}
            <b>{isSignIn ? "Sign Up now." : "Sign In now."}</b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
