import { Image } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import "./All.css"

const Dualslider = () => {
    const[heading,setHeading]=useState([])
    useEffect(()=>{
        axios.get("/doubleslide")
    .then((res)=>setHeading(res.data))

    },[])
    
  return (
    <div>
     <Splide aria-label="My Favorite Images" options={{
        perPage: 3,
        height: '220px',
        rewind: true,
        gap: '25px',
      }}>
    {
   heading.length>0 && heading.map(({url},index)=>(
    <SplideSlide key={index}>
    <Image w={"150%"}src={url} alt="Image 1" h={"200px"} borderRadius={"15px"}/>
  </SplideSlide>
   ))
}
</Splide>
    </div>
  )
}

export default Dualslider