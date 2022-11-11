import { Box, Flex, Image, SimpleGrid, Text,Center } from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from 'react'

const Topslide = () => {
    const[head,setHead]=useState([])
    axios.get("https://harmless-towering-cardboard.glitch.me/topslide")
    .then((res)=>setHead(res.data))

  return (
    <Box>
        <SimpleGrid columns={[2,4,6,8]} w={"80%"} m={"auto"} mt={"20px"}>
        {
            head.length>0 && head.map(({url,title,dis},index)=>(
                <SimpleGrid  key={index} columns={1}>
                <Center>
                <Image src={url} w={"60px"}></Image>
                </Center>
                <Center>
                <Text>{title}</Text>
                </Center>
                <Center>
                <Text>{dis}</Text>
                </Center>
                </SimpleGrid >
            ))
        }
        </SimpleGrid>
    </Box>
  )
}

export default Topslide