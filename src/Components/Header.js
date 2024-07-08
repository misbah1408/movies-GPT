import React, { useEffect } from 'react'
import { NET_LOGO } from '../utils/Constants'
import { auth } from '../utils/fireBaseConfig';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import {toggleGptSearchView} from "../utils/gptSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const user = useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      const err = error;
      console.log(err)
    });
  }
  const handleGPTsearch =() =>{
    dispatch(toggleGptSearchView())
  }

  useEffect(()=>{
     const unsubsribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
            navigate("/browse")
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });

      return () => unsubsribe()
},[])
  return (
    <div className='absolute  w-[100%] top-0  z-10 flex justify-between bg-gradient-to-b from-black'>
      <img  src={NET_LOGO} alt="logo" className='h-20 mx-28' />
      {user && <div className='flex mr-10 items-center gap-4'>
        <button className='text-white rounded-md font-semibold bg-[#6bc0a9] px-5 py-2' onClick={handleGPTsearch}>{showGptSearch? "HomePage" : "GPT Search"}</button>
        <button className='text-white rounded-md font-semibold bg-[rgb(219,0,0)] px-5 py-2' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
