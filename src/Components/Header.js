import React, { useEffect } from "react";
import { NET_LOGO } from "../utils/Constants";
import { auth } from "../utils/fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        const err = error;
        console.log(err);
      });
  };
  const handleGPTsearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsribe();
  }, []);
  return (
    <div className="absolute  w-[100%] top-0  z-10 flex justify-between bg-gradient-to-b from-black">
      <img src={NET_LOGO} alt="logo" className="md:h-20 md:mx-28 mx-10 h-14" />
      {user && (
        <div className="flex items-center gap-4 mr-4 sm:mr-10">
          <button
            className="text-white rounded-full md:rounded-md font-semibold bg-[#6bc0a9] md:px-4 md:py-2 py-2 px-3 sm:px-5 sm:py-2 text-sm sm:text-base"
            onClick={handleGPTsearch}
          >
            <span className="md:hidden flex text-white" title={showGptSearch ? "HomePage" : "GPT Search"}>
              {showGptSearch ? <i className="fa-solid fa-backward text-sm"></i> : "AI"}
            </span>

            <span className="hidden md:flex">
              {showGptSearch ? "HomePage" : "GPT Search"}
            </span>
          </button>
          <button
            className="text-white md:rounded-md font-semibold bg-[rgb(219,0,0)] md:px-4 md:py-2 py-2 px-3 rounded-full"
            onClick={handleSignOut}
          >
            <i className="fa-solid fa-arrow-right-from-bracket md:hidden text-sm"></i>
            <span className="hidden md:flex">Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
