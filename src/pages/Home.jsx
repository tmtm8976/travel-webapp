import React from 'react'
import Navbar from '../component/layout/navbar/Navbar'
import Hero from '../component/Hero'
import Explore from '../component/Explore'
import About from '../component/About'
import Footer from '../component/layout/footer/Footer'

export const Home = () => {
  return (
    <>
        <Hero/>
        <Explore/>
        <About/>
    </>
  )
}
