import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <>
      <div className='h-[85vh] overflow-x-auto scrollbar-hide flex justify-start items-start'>
<div className='grid grid-cols-2 gap-2'>
  {
  [1,2,3,4,6,7,4,7,4,34,5,4,6,4,4,6,6,6,6,87].map((item,index)=>(
  <Link key={index} className='w-full overflow-hidden rounded-sm cursor-pointer h-[90px]'>
<img src="https://placehold.co/600x400" className='w-full h-full object-fill' alt=""/>
  </Link>
))
}
</div>
      </div>
    </>
  )
}

export default Project
