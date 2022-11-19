import { Box, Center, Image, Text } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import "./All.css"
import { useNavigate } from 'react-router';

let data=1
    
const Tread = () => {
  const [trd, setTrd] = useState([])
  useEffect(() => {
    axios.get("https://harmless-towering-cardboard.glitch.me/Trending")
      .then((res) => setTrd(res.data))

  }, [])

const navigate=useNavigate();
  const handleClick = (id) => {
    // console.log("suhnvsv");
    navigate(`/productt/${id}`)
    data=id;
  }
  return (
    <div >
      <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} fontWeight={'bold'}>New Trendings</Text>
      <Splide aria-label="My Favorite Images" options={{
        perPage: 6,
        height: '370px',
        rewind: true,
        gap: '25px',
      }}>
        {
          trd.length > 0 && trd.map(({ url, title, strike, price }, index) => (
            <SplideSlide key={index} >
                <Box  id='trending' h={"300px"} boxShadow='xl' p='6' rounded='md' bg='white' border={"1px solid grey"}>
                  <Center onClick={()=>{handleClick(index)}}>

                    <Image w={"100px"} h={"140px"} src={url}  alt="Image 1" borderRadius={"15px"} />

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

export  {Tread,data}