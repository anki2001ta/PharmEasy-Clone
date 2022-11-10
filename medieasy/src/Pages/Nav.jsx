
import { Box, Button, Center, Flex, Img, InputGroup, InputLeftElement, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Test from './place';



const Nav = () => {
  


    // inside component:

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Box w='100%' h="80px" border="1px solid black" margin={"auto"} pt={"10px"} _disabled >
            <SimpleGrid columns={[3, 3, 3, 6]} >
                <Center mt={"15px"}>
                    <Img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" w="150px" h={"35px"}></Img>
                </Center>
                <Flex>
                    <Box border={"1px solid gray"} w={"0px"} h={"35px"} mt={"10px"}>
                    </Box>
                    <SimpleGrid columns={1} border={"1 px solid black"} >
                        <Flex>
                            <Center>
                                <BoltIcon fontSize="small" />
                            </Center>
                            <Center>
                                <Text fontSize='xs' color={"gray.600"}>
                                    Express delivery to
                                </Text>
                            </Center>
                        </Flex>
                        <Flex >
                            <Text ml={"14px"} fontSize='sm' as='b'>400001 Mumbai
                            </Text>
                            <Center fontSize='sm'  >
                                <ChevronDownIcon />
                            </Center>
                        </Flex>
                    </SimpleGrid>
                </Flex>
                <Flex gap={10}>
                <SimpleGrid >
                    <Center>
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<SearchIcon color='gray.500' />}
                                />
                                <Test />
                            </InputGroup>
                        </Stack>
                        <Button h={"33px"} mt={"5px"} colorScheme='teal' size='md' position={"absolute"} top={3.5} ml={"480px"} w={"100px"}>Search</Button>
                    </Center>
                </SimpleGrid>
                <SimpleGrid >
                    <Flex >
                    <Center>
                    < PersonOutlineOutlinedIcon fontSize="medium"/>
                    </Center>
                    <Center>
                            <Text fontSize="16px" color={"gray.600"}>
                                   User
                                </Text>
                            </Center>
                            </Flex>
                </SimpleGrid>
                <SimpleGrid >
                    <Flex >
                    <Center>
                    < NewReleasesOutlinedIcon fontSize="medium"/>
                    </Center>
                    <Center>
                            <Text fontSize="16px" color={"black.600"}>
                                  Offers
                                </Text>
                            </Center>
                            </Flex>
                </SimpleGrid>
                <SimpleGrid >
                    <Flex >
                    <Center>
                    < ShoppingCartOutlinedIcon fontSize="medium"/>
                    </Center>
                    <Center>
                            <Text fontSize="16px" color={"black.600"}>
                                   Cart
                                </Text>
                            </Center>
                            </Flex>
                </SimpleGrid>
                
                </Flex>
              
    </SimpleGrid>
    <Flex alignItems={"center"} justifyContent={"center"} gap={7} h={"36px"} bg={"#CEF8FF"} mt={"10px"}>
        <Text>Medicine</Text>
        <Text>Lab Tests</Text>
        <Text>Health Care</Text>
        <Text>Health Blogs</Text>
        <Text>PLUS</Text>
        <Text>Offers</Text>
        <Text>Surgeries</Text>
        <Text>Value Store</Text>
    </Flex>
    <Flex alignItems={"left"}  gap={7} pl={"103px"} h={"36px"} bg={"#000000"} color={"whiteAlpha.800"} fontSize={"12px"} >
    <Center>
    <Text color={"gray.600"} >Navigate To</Text>
    </Center>
    <Center>
        <Text>Categories</Text>
        </Center>
        <Center>
        <Text>Shop By Concerns</Text>
        </Center>
        <Center>
        <Text>Deals of the day</Text>
        </Center>
        <Center>
        <Text>Featured Brands</Text>
        </Center>
        <Center>
        <Text>Lab Tests by Concern</Text>
        </Center>
        
    </Flex>

        </Box>

    )
}

export default Nav
//   {/* <h1>{scrollPosition}</h1>  */}