import React, { useState, useEffect } from 'react'
import Card from './Card'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Wrapper() {

  const [cardItems, setCardItems] = useState([
  {img: "images/hb.jpg", title:"Explore", desc:"Visit the world best places"},{img: "images/rocket.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/plane.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/grape-plate.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/girl-by-wall.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/park-squad.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/mesume.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/safari-hotel.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/girl-on-stairs.jpg", title:"Explore", desc:"Visit the world best places"},
]);


const [maxScroll, setMaxScroll] = useState(false);
const [minScroll, setMinScroll] = useState(true);

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  };

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  };

  const handleScroll = () => {
    const slider = document.getElementById('slider');
    if (slider.scrollLeft === 0) {
      setMinScroll(true);
    } else {
      setMinScroll(false);
    }
    if (slider.scrollLeft > (slider.scrollWidth - slider.clientWidth-10)) {
      setMaxScroll(true);
    } else {
      setMaxScroll(false);
    }
  };
  
  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.addEventListener('scroll', handleScroll);
    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

  return (<>
    <div className='relative flex items-center'>

    {/* slider left arrow */}
    {!minScroll && (
        <MdChevronLeft
          size={40}
          className='animate-fadeIn z-20 shadow-lg bg-white hover:scale-105 ease-in-out duration-300 rounded-full m-3 border-gray-400 border-solid border absolute top-4/6 left-1 '
          onClick={slideLeft}
        />
      )}


      <div id='slider' className='relative flex overflow-x-scroll scroll scroll-smooth w-full'>
          <div className='m-32 hidden md:block lg:block xl:block'></div>
          {cardItems.map((it)=>
              <Card image={it.img} title={it.title} desc={it.desc}/>
          )}
          <div className='m-32'></div>
      </div>
      <div className='bg-gray-200 absolute w-full h-1/2 top-1/2'></div> 

      {/* slider right arrow */}
      {!maxScroll && (
        <MdChevronRight
          size={40}
          className='animate-fadeIn z-10 shadow-lg bg-white hover:scale-105 ease-in-out duration-300 rounded-full m-3 border-gray-400 border-solid border absolute top-4/6 right-0 '
          onClick={slideRight}
        />
      )}

    </div>
    </>
  )
}
  