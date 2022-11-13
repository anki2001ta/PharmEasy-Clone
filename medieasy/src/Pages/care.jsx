import { Box, Image, SimpleGrid, Text,Center } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import "./All.css"

const Care = () => {

    const[stn,seStn]=useState([])
   
    useEffect(()=>{
        axios.get("/stnm")
        .then((res)=>seStn(res.data))

    },[])
   

  return (
    <Box bgGradient={[
        'linear(to-tr, teal.100, yellow.100)',
       
      ]} h={"270px"} color={"black"}>
         <Text textAlign={"left"} ml={"40px"} fontSize={"25px"} pt={"10px"}fontWeight= {'bold'}>Shop by Concern</Text>
    <Center>
    <Box mb={"30px"}mt={"35px"} justifyContent={"center"} id="care" >
    <Center>
        <SimpleGrid columns={[2,4,6,8]} w={"80%"} m={"auto"} mt={"20px"} gap={10} >
       
           
           {stn.length>0 && stn.map(({url,title,disc},index)=>(
                <SimpleGrid  key={index} columns={1}  w={"186px"} >
                <Center>
                <Image src={url} w={"130px"}  ></Image>
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

export default Care
// shop by concern