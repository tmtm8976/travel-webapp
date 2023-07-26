import React from 'react'

export default function About() {
  const txt = `

  During my trip, I visited some of the most renowned museums in the world, including the Louvre in Paris, the British Museum in London, and the Metropolitan Museum of Art in New York. Each museum was unique and fascinating, and I learned so much about art, history, and culture.
  
  The accommodations provided by the agency were top-notch, and the tour guides were knowledgeable and passionate about their work. They shared interesting stories and insights about each museum, which made the experience even more enriching.
  
  What impressed me the most about this agency was their attention to detail. They took care of everything, from transportation to tickets to meals, which made the trip stress-free and enjoyable.
  
  Overall, I highly recommend this tourism agency to anyone who wants to explore museums all around the world. They truly went above and beyond to make sure I had a memorable and fulfilling experience. I can't wait to book my next trip with them!` ;

  return (
    <>
    <div className='bg-white py-10 relative h-fit'>
      
      <hr class="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" /> 

      <div className='bg-gray-200 absolute w-full h-24 top-1/4'></div> 

      <div className='flex flex-col lg:flex-row xl:flex-row relative h-fit items-center'>
        <div className='border-gray-800 rounded-xl border-4 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] lg:h-[30vw] relative m-10'>
            <img src="images/mesume.jpg" alt="" className='absolute left-4 top-4 rounded-xl' />
        </div>
        <div className='md:ml-10 mt-5 w-3/4 '>
          <span className='text-xs'>S T O R I E S</span>
          <h1 className='text-xl md:text-3xl lg:text-3xl xl:text-3xl mt-0 mr-3 font-bold'>OUR CUSTOMERS</h1>
          <p className='p-1 mt-0 md:mt-24 lg:mt-24 xl:mt-24 text-xs md:text-lg lg:text-lg xl:text-lg md:mr-5 lg:mr-5 xl:mr-5'>{txt}</p>
        </div>


      </div>

    </div>
    </>
  )
}
