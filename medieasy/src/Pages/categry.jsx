import { Box, Image, Text } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import "./All.css"

const Categry = () => {
    const[cate,setCate]=useState([])
    useEffect(()=>{
        axios.get("/category")
    .then((res)=>setCate(res.data))

    },[])
    
  return (
    <div>
    <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>Shop by Categories</Text>
     <Splide aria-label="My Favorite Images" options={{
        perPage: 8,
        height: '200px',
        rewind: true,
        gap: '25px',
      }}>
    
    {
   cate.length>0 && cate.map(({url,title},index)=>(
   
    <SplideSlide key={index}>
    <Box border={"1px solid grey"}  bgColor={"white"}>
    <Image w={"100%"}src={url} alt="Image" h={"150px"} borderRadius={"15px"}/>
    </Box>
    <Text>{title}</Text>
   
  </SplideSlide >
  
   ))
}
</Splide>
    </div>
  )
}

export default Categry
//shop by categories