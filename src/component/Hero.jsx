import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-[35vh] overflow-hidden'>
        <img src="images/heli.jpg" alt="" className='absolute -z-10 self-center overflow-hidden object-cover bottom-80 h-[120%]'/>
        <div className='absolute  md:text-5xl md:w-fit lg:text-5xl lg:w-fit lg:p-36 xl:text-5xl xl:w-fit xl:p-40 overflow-hidden text-white text-left font-bold text-3xl w-40 p-11'>Explore Your World</div>
        <div className='bg-black opacity-40 top-0 -z-10 absolute w-full h-1/2'></div> 
    </div>
  )
}