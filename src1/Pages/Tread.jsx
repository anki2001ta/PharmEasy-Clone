import { Box, Center, Image, Link, Text } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState ,useEffect} from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import "./All.css"


const Tread = () => {
    const[trd,setTrd]=useState([])
    useEffect(()=>{
        axios.get("/Trending")
    .then((res)=>setTrd(res.data))

    },[])
    

    
  return (

    <div >
    
    <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight= {'bold'}>New Trendings</Text>
    
     <Splide aria-label="My Favorite Images"  options={{
        perPage: 6,
        height: '370px',
        rewind: true,
        gap: '25px',
      }}>
    {
   trd.length>0 && trd.map(({url,title,strike,price},index)=>(
    <SplideSlide key={index} >
        <Box id='trending' h={"300px"} boxShadow='xl' p='6' rounded='md' bg='white'>
    <Center>
    <Link to={"/Productt"}>
    <Image w={"100px"}src={url} h={"140px"} alt="Image 1"borderRadius={"15px"}  />
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
  )
}

export default Tread