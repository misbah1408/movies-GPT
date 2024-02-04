import React, { useRef, useState } from "react";
import Header from "./Header";
import { TOP_BG } from "../utils/Constants";
import { checkValidData } from "../utils/validity";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
            displayName: name?.current?.value, photoURL: "https://avatars.githubusercontent.com/u/154675205?v=4"
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
            navigate("/browse")
          }).catch((error) => {
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
      signInWithEmailAndPassword(auth, email?.current?.value,
        password?.current?.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user)
          navigate("/browse")
          // ...
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute flex flex-col h-[35rem] w-[450px] py-12 px-16 mx-auto right-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-xl top-32 gap-5"
        >
          <span className="text-white font-semiboldbold text-4xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </span>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="First Name"
              className="h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px] outline-none focus:text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px] outline-none focus:text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="h-6 w-[100%] rounded-sm py-7 px-4 placeholder:h-6 text-left p-4 bg-transparent border-solid border-gray-500 border-[1px] outline-none focus:text-white"
          />
          <span className="font-semibold text-red-500">{errorMessage}</span>
          <button
            className="h-10 mt-5 text-white text-l rounded-md bg-[rgb(219,0,0)]"
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
