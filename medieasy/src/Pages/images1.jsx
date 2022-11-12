import { Box, Flex, Image, SimpleGrid, Text,Center } from "@chakra-ui/react"
import axios from "axios"
import React, { useState,useEffect } from 'react'
import "./All.css"

const Topimg = () => {
    const[mg,setMet]=useState([])
    useEffect(()=>{
         axios.get("/Previous")
    .then((res)=>setMet(res.data))

    },[])
    
   

  return (
<>
<Text textAlign={"left"} ml={"38px"} fontSize={"20px"} fontWeight= {'bold'}>Previously Browsed Items</Text>
    <Box mt={"20px"} h={"300px"} color={"black"} >
  

    <Box ml={"40px"}  >
   
        <SimpleGrid columns={[1,1,2,4]} w={"50%"} gap={10} >
       
           
           {mg.length>0 && mg.map(({url,title,strike,price},index)=>(
                <SimpleGrid  key={index} columns={1}  w={"176px"} gap={9} boxShadow='xl' p='2' rounded='md' bg='gray.100' >
                <Center>
                <Box >
                <Image boxShadow='bas' p='3' src={url} w={"120px"} h={"95px"}   _groupHover={{ color: 'tomato' }}></Image>
                </Box>
                </Center>
                
                <Text  fontSize={"15px"} _hover={{ fontWeight: 'semibold' }} >{title}</Text>
               
               <strike><Text mt={"-40px"}fontSize={"15px"}color={"red.600"}>MRP{strike}</Text></strike>
               
                <Text mt={"-50px"} fontSize={"15px"} >{price}</Text>
               
                </SimpleGrid >
            ))
           }
         
        </SimpleGrid>
        
    </Box>
   
    </Box>
    </>
  )
}

export default Topimg