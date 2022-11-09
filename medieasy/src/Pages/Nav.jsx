
import { Box, Center, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import { ChevronDownIcon } from '@chakra-ui/icons'


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
        <Box w='100%' h="80px" border="1px solid black" margin={"auto"} pt={"10px"} >
            <SimpleGrid columns={[3, 3, 3, 6]} >
                <Center mt={"17px"}>
                <Img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" w="150px" h={"35px"}></Img>
                </Center>
                <Flex>
                    <Box border={"1px solid black"} w={"0px"} h={"45px"} m={"auto"}>
                    </Box>
                    <SimpleGrid columns={1} border={"1 px solid black"} >
                        <Flex>
                            <BoltIcon color="success" />
                            <Text>
                                Express delivery to
                            </Text>
                        </Flex>
                        <Flex>
                            <Text>400001 Mumbai
                            </Text>
                            <Center>
                            <ChevronDownIcon/>
                            </Center>
                        </Flex>
                    </SimpleGrid>
                </Flex>

                <h1>Deliver to this Addreaa</h1>
                {/* <h1>{scrollPosition}</h1>  */}
            </SimpleGrid>

        </Box>

    )
}

export default Nav
