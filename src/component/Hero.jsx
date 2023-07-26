import React from 'react'
import Heroslider from './Heroslider'

export default function Hero() {
  
  return (
    <div className=' w-full h-[30vw] -z-30'>
       <div className='relative -top-20 md:-top-40 lg:-top-80'> <Heroslider/></div>
        <div className='bg-black opacity-40 top-0 absolute w-full h-full'></div> 
    </div>
  )
}

