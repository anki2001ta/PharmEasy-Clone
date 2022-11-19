import { Center, Image,  Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const Checkout = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/')
    }, 5000)
    return (
        <div>
            <Center>
                <Text mt={"10px"} fontSize={"30px"}color={"teal.400"}>YOUR TRANSACTION  IS SUCESSFULL</Text>
            </Center>
            <Center>
            <Image mt={"25px"} w={"50%"} h={"250px"}src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"></Image>
            </Center>
        </div>
    )
}

export default Checkout