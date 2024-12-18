import React from 'react'

const Image = ({addImage}) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-2'>
  {
  [1,2,3,4,2,4,6,7,8,4,32,4,23,45,34,23,45,5].map((item,index)=>(
  <div onClick={()=>addImage("https://placehold.co/600x400")} className='w-full overflow-hidden rounded-sm cursor-pointer h-[90px]'>
<img src="https://placehold.co/600x400" className='w-full h-full object-fill' alt=""/>
  </div>
))
}
</div>
    </>
  )
}

export default Image
