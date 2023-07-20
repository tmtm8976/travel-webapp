import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <img src="images/safari-desert-tent.jpg" alt="" className='absolute -z-10 top-0 overflow-hidden h-full object-cover md:w-screen md:h-auto lg:w-screen lg:h-auto xl:w-screen xl:h-auto '/>
        <div className='absolute -z-10 top-1/3 left-1/3 overflow-hidden text-white text-center font-bold text-5xl'>Explore Your World</div>
    </div>
  )
}
