import React, { useEffect } from 'react';

export default function Heroslider() {
  const heroImages = [
    "images/heli.jpg",
    "images/safari-desert-tent.jpg",
    "images/desert-table.jpg"
  ];

  useEffect(() => {
    const slider = document.getElementById('slide');
    let currentImageIndex = 0;

    const slideInterval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      slider.scrollLeft = currentImageIndex * slider.offsetWidth;
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [heroImages]);

  return (
    <div id='slide' className='flex overflow-x-scroll scroll scroll-smooth w-full no-scrollbar'>
      {heroImages.map(i => <img key={i} src={i} alt='Hero Image' />)}
    </div>
  );
}