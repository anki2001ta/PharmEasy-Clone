import { Box, Image, SimpleGrid, Text,Center } from "@chakra-ui/react"
import axios from "axios"
import React, { useState,useEffect } from 'react'
import "./All.css"

const Topslide = () => {
    const[head,setHead]=useState([])
    useEffect(()=>{
          axios.get("https://harmless-towering-cardboard.glitch.me/topslide")
    .then((res)=>setHead(res.data))

    },[])
    
  

  return (
    <Box bgGradient={[
        'linear(to-tr, teal.100, yellow.100)',
       
      ]} h={"270px"} color={"black"}>
    <Center>
    <Box mb={"30px"}mt={"35px"} justifyContent={"center"}  >
    <Center>
        <SimpleGrid columns={[2,4,6,8]} w={"80%"} m={"auto"} mt={"20px"} gap={10} >
       
           
           {head.length>0 && head.map(({url,title,disc},index)=>(
                <SimpleGrid  key={index} columns={1}  w={"186px"} >
                <Center>
                <Image src={url} w={"100px"}  ></Image>
                </Center>
                <Center>
                <Text fontSize={"15px"} >{title}</Text>
                </Center>
                <Center>
                <Text fontSize={"15px"}color={"red.600"}>{disc}</Text>
                </Center>
                </SimpleGrid >
            ))
           }
         
        </SimpleGrid>
        </Center>
    </Box>
    </Center>
    </Box>
  )
}

export default Topslide