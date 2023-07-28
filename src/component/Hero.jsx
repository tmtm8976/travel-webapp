import React from 'react'
import Heroslider from './Heroslider'

export default function Hero() {
  
  return (
    <div className=' w-full h-[60vh] lg:h-[30vw] -z-30 place-items-center flex justify-center lg:justify-start text-center'>
       <div className='absolute top-0 lg:-top-80 -z-50'> <Heroslider/></div>
        <div className='bg-gradient-to-r from-black top-0 absolute w-full h-full'></div> 
        <div className='relative flex flex-col text-white w-[90vw] lg:w-[40vw] items-center text-center lg:items-start lg:text-left lg:left-64'>
          <span className='text-[3vw] md:text-xs font-light lg:ml-2'>moon travels tourism organization</span>
          <span className='text-[7vw] lg:text-[4vw] font-bold text leading-none'>Expert Guidance for Your Next Adventure</span>
          <span className=' text-[3vw] md:text-xs font-light w-[80vw] lg:w-[20vw] lg:ml-2'>Welcome to our tourism agency where we specialize in planning dream vacations that are tailored to your unique preferences and interests.</span>
          <div><button className='text-[3vw] m-1 p-1 px-3 md:mt-3 md:p-3 backdrop-brightness-200 backdrop-blur-xl rounded-lg md:text-sm transition ease-in-out delay-150  hover:scale-105 duration-300'>S T A R T </button></div>
        </div>
    </div>
  )
}

