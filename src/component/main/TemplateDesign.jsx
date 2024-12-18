import React from 'react';

const TemplateDesign = () => {
  return (
    <>
      {
        [1,2,3,4].map((item,index)=>(
            <div className='group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer '>

                <img className='w-full h-full rounded-md' src="https://placehold.co/600x400"/>
            </div>
        ))
      }
    </>
  )
}

export default TemplateDesign
