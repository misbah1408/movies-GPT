import React from 'react'
import { NET_LOGO } from '../utils/Constants'
import { auth } from '../utils/fireBaseConfig';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      const err = error;
    });
  }
  return (
    <div className='absolute  w-[100%] top-0  z-10 flex justify-between '>
      <img  src={NET_LOGO} alt="logo" className='h-20 mx-28' />
      {user && <div className='flex mr-32 items-center gap-4'>
        <button className='text-white rounded-md font-semibold bg-[rgb(219,0,0)] px-5 py-2' onClick={handleSignOut}>Sign Out</button>
        <img className='rounded-full h-8' src={user?.photoURL} alt="user" />
      </div>}
    </div>
  )
}

export default Header
