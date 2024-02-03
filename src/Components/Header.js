import React from 'react'
import { NET_LOGO } from '../utils/Constants'

const Header = () => {
  return (
    <div className='absolute  w-[100%] top-0  z-10'>
      <img  src={NET_LOGO} alt="logo" className='h-20 mx-28' />
      
    </div>
  )
}

export default Header
