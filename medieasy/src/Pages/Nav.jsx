
import { Box, Button, Center, Flex, IconButton, Img, InputGroup, InputLeftElement, SimpleGrid, Stack, Text, VStack, useColorMode, Input, useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import { SunIcon, ChevronDownIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import Test from './place';
import { Link } from 'react-router-dom';




const Nav = () => {
    const toast = useToast()
    function handlenum(){
        let vr=Math.floor(Math.random()*9999)+1000;
       
          console.log(vr)
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,

          })
          onClose()
        }


    // inside component:
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [userNumber, setuserNumber] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [overflow, setOverflow] = useState("hidden")


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

    useEffect(() => {
        scrollPosition >= 102 ? setOverflow("visible") : setOverflow("hidden")
    }, [scrollPosition])

    const { colorMode, toggleColorMode } = useColorMode()
 function handleChange(e){
    if(e.target.value.length===10){ 
        window.alert("Usernumber shouldn't exceed 10 characters")
      }
      setuserNumber(e.target.value);
 }

    //
    return (
        <Box w='100%' h={"80px"} borderBottom={"1px solid black"} margin={"auto"} pt={"10px"} top={0} zIndex={999} overflow={overflow} position={"sticky"} bg={colorMode == "dark" ? "black" : "white"}>
            <SimpleGrid columns={[3, 3, 3, 6]} >
                <Center mt={"15px"}>
                    <Link to="/" >
                    <Img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" w="150px" h={"35px"}></Img></Link>
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
                                < PersonOutlineOutlinedIcon fontSize="medium" ref={btnRef} onClick={onOpen} pt={"4px"} />
                            </Center>
                            <Center>
                                <Text fontSize="16px" color={colorMode == "dark" ? "white" : "black"}>
                                    User
                                </Text>
                            </Center>
                        </Flex>
                        <Box>
                            <Center>
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent >
                                    <DrawerCloseButton />
                                    <DrawerHeader color={"teal"} >Quick Register/Login</DrawerHeader>

                                    <DrawerBody >
                                        <Box mt={"20px"}>
                                        <Input placeholder='Type Your Mobile number'
                                         type="number"
                                         name="usernumber"
                                         value={userNumber}
                                         onChange={ handleChange}
                                        
                                        />
                                        <Center>
                                        <Button  onClick={handlenum} bg={"teal.400"} color={"white.400"}w={"98%"} mt={"15px"}>Send OTP</Button>
                                        </Center>
                                        <Center>
                                            <Link to="/admin">
                                        <Button   bg={"red.400"} color={"white.400"}w={"98%"} mt={"15px"}>Login AS Admin</Button>
                                        </Link>
                                        </Center>
                                        </Box>
                                    </DrawerBody>

                                    <DrawerFooter>
                                        <Button variant='outline' mr={1} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme='teal'>Save</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                            </Center>
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid >
                        <Flex >
                            <Center>
                                < NewReleasesOutlinedIcon fontSize="medium" />
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
                                < ShoppingCartOutlinedIcon fontSize="medium" />
                                
                            </Center>
                            <Center>
                                <Text  color={"black.600"}>
                                  <Link to="/cart">Cart</Link>
                                </Text>
                            </Center>
                        </Flex>
                    </SimpleGrid>
                    <Flex>
                        <Center>
                            <VStack>
                                <IconButton icon={colorMode == "light" ? <SunIcon /> : <MoonIcon color={"white"} />}


                                    isRound="true" size="md" onClick={toggleColorMode} >

                                </IconButton>
                            </VStack>
                        </Center>
                    </Flex>
                </Flex>

            </SimpleGrid>
            <Box bg={"whiteAlpha.500"} h={"18px"}>
            </Box>
            <Flex alignItems={"center"} justifyContent={"center"} gap={7} h={"36px"} bg={"#CEF8FF"} color={"black"} >
                <Text>Medicine</Text>
                <Text>Lab Tests</Text>
                <Text>Health Care</Text>
                <Text>Health Blogs</Text>
                <Text>PLUS</Text>
                <Text>Offers</Text>
                <Text>Surgeries</Text>
                <Text>Value Store</Text>
            </Flex>

            <Flex alignItems={"left"} gap={7} pl={"103px"} h={"36px"} bg={"#000000"} color={"whiteAlpha.800"} fontSize={"12px"}  >
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