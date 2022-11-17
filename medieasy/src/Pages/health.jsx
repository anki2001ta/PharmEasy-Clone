import { Box, Center, Image, Link, Text } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import "./All.css"

const Health = () => {
    const[health,setHealth]=useState([])
    useEffect(()=>{
         axios.get("https://harmless-towering-cardboard.glitch.me/Health")
    .then((res)=>setHealth(res.data))

    },[])
  return (
    <div >
        <div >
    <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'} mt={"35px"}>Featured Brands</Text>
    
     <Splide aria-label="My Favorite Images"  options={{
        perPage: 4,
        height: '170px',
        rewind: true,
        gap: '20px',
      }}>
    {
   health.length>0 && health.map(({url,title,strike,price},index)=>(
    <SplideSlide key={index} >
        <Box id='trending' h={"300px"}>
    <Center>
    <Link to={"/Productt"}>
    <Image w={"400px"}src={url} h={"130px"} alt="Image 1"borderRadius={"15px"}  />
    </Link>
    </Center>
    <Center>
    <Text mt={"15px"}>{title}</Text>
    </Center>
    <Center>
   <strike> <Text>{strike}</Text></strike>
   </Center>
    <Text color={"red.400"}>{price}</Text>
    </Box>
  </SplideSlide>
   ))
}
</Splide>
</div>
 </div>
  )
}

export default Health