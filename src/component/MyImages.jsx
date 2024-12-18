import React from 'react'
import Image from './Image'

const MyImages = () => {
  return (
    <div>
        <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3 '>
            <label className='text-center cursor-pointer' htmlFor='img'>Upload Image</label>
            <input type="file" id="img" className='hidden'/>
        </div>
      <div className='h-[80vh] overflow-x-auto scrollbar-hide flex justify-start items-start'>
<Image/>
      </div>
    </div>
  )
}

export default MyImages
