import { Image } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css';
import "./All.css"


const Singleslider = () => {
    const[single,setSingle]=useState([])
    useEffect(()=>{
         axios.get("/singleimg")
    .then((res)=>setSingle(res.data))

    },[])
   
  return (
    <div>
     <Splide aria-label="My Favorite Images" options={{
        perPage: 3,
        height: '100px',
        rewind: true,
        gap: '25px'
       
      }}>
    {
   single.length>0 && single.map(({url},index)=>(
    <SplideSlide key={index}>
    
    <Image w={"150%"}src={url} alt="Image1" h={"100px"} borderRadius={"15px"}/>
   
  </SplideSlide>
   ))
}
</Splide>
    </div>
  )
}

export default Singleslider