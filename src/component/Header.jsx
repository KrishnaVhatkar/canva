import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
      <div className='flex justify-between px-10 items-center text-gray-300 h-full '>

    <Link>
    <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="svg img"></img>
    </Link>
      </div>
    </div>
  )
}

export default Header
