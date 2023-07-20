import React from 'react'

export default function Card({image, title, desc}) {
  return (
    <div><div
    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init
      data-te-ripple-color="light">
      <div className='h-80 align-middle'>
      <img
        class="rounded-t-lg"
        src={image}
        alt="" />

      </div>
      <a href="#!">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </a>
    </div>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
       {desc}
      </p>
    </div>
  </div></div>
  )
}
