import React, { useRef, useState } from "react";
import Header from "./Header";
import { AVATAR, TOP_BG } from "../utils/Constants";
import { checkValidData } from "../utils/validity";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User not found");
        });
    }
  };

  const toggleLogin = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <Header />
      <div className="center-div h-[100%]">
        <div className="relative w-full h-h-dvh sm:h-h-dvh md:h-dvh">
          <img
            src={TOP_BG}
            className="w-full h-full object-fill bg-gradient-to-t from-black brightness-50 hide-on-small"
            alt=""
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute flex flex-col w-[90%] max-w-[450px] p-6 sm:p-8 md:p-12 mx-auto right-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-xl top-20 md:top-32 gap-4 sm:gap-5"
        >
          <span className="text-white font-semibold text-3xl md:text-4xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </span>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="First Name"
              className="h-10 w-full rounded-sm py-2 px-4 bg-transparent border border-gray-500 outline-none text-white placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="h-10 w-full rounded-sm py-2 px-4 bg-transparent border border-gray-500 outline-none text-white placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="h-10 w-full rounded-sm py-2 px-4 bg-transparent border border-gray-500 outline-none text-white placeholder-gray-400"
          />
          <span className="font-semibold text-red-500">{errorMessage}</span>
          <button
            className="h-10 mt-4 text-white text-lg rounded-md bg-[rgb(219,0,0)]"
            onClick={handleBtnClick}
          >
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
