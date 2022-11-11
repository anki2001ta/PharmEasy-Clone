import { Image } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

const Dualslider = () => {
    const[heading,setHeading]=useState([])
    axios.get("https://harmless-towering-cardboard.glitch.me/doubleslide")
    .then((res)=>setHeading(res.data))
  return (
    <div>
     <Splide aria-label="My Favorite Images" options={{
        perPage: 2,
        height: '150px',
        rewind: true,
        gap: '10px',
      }}>
    {
   heading.length>0 && heading.map(({url})=>(
    <SplideSlide>
    <Image src={url} alt="Image 1"/>
  </SplideSlide>
   ))
}
</Splide>
    </div>
  )
}

export default Dualslider