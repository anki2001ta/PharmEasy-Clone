import { Box, Center, Image, Link, Text } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import "./All.css"

const Single = () => {
    const[single,setSingle]=useState([])
    useEffect(()=>{
         axios.get("/single")
    .then((res)=>setSingle(res.data))

    },[])
   

    
  return (
    <div >
        <div border={"1px solid green"}>
    <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Lab Tests by Health Concern</Text>
    
     <Splide aria-label="My Favorite Images"  options={{
        perPage: 6,
        height: '270px',
        rewind: true,
        gap: '25px',
      }}>
    {
   single.length>0 && single.map(({url,title,strike,price},index)=>(
    <SplideSlide key={index} >
        <Box id='trending' h={"300px"}>
    <Center>
    <Link to={"/Productt"}>
    <Image w={"200px"}src={url} h={"150pxpx"} alt="Image 1"borderRadius={"15px"}  />
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

export default Single