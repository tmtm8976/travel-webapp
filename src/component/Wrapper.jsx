import React, { useState } from 'react'
import Card from './Card'

export default function Wrapper() {

  const [cardItems, setCardItems] = useState([{img: "images/grape-plate.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/girl-by-wall.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/park-squad.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/mesume.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/safari-hotel.jpg", title:"Explore", desc:"Visit the world best places"},
  {img: "images/girl-on-stairs.jpg", title:"Explore", desc:"Visit the world best places"},
]);
  

  return (
    <div className='bg-white flex flex-wrap flex-row gap-20 p-10 w-4/5'> 
        {cardItems.map((it)=>
            <Card image={it.img} title={it.title} desc={it.desc}/>
        )}
    </div>
  )
}
  