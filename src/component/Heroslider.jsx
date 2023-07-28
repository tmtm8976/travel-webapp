import React, { useEffect, useState } from 'react';

export default function Heroslider() {
  const heroImages = [
    "images/safari-desert-tent.jpg",
    "images/desert-table.jpg", 
    "images/ico.jpg"
  ];

  const [images, setImages] = useState(heroImages);

  useEffect(() => {
    const slider = document.getElementById('slide');
    let currentImageIndex = 0;

    const slideInterval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      slider.scrollLeft = currentImageIndex * slider.offsetWidth;

      // Move the first image to the end of the array
      const newImages = [...images];
      newImages.push(newImages.shift());
      setImages(newImages);
    }, 2500);

    return () => clearInterval(slideInterval);
  }, [images]);

  return (
    <div id='slide' className='flex overflow-x-scroll scroll scroll-smooth h-full no-scrollbar'>
      {images.map(i => <img key={i} src={i} alt='Hero Image' className='object-cover h-[80vh] md:h-[70vh] lg:h-auto'/>)}
    </div>
  );
}