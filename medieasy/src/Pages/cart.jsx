
import { Button, Center, Image, SimpleGrid, Text, Box, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Modal, } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router';
const Cart = () => {
    let cart = JSON.parse(localStorage.getItem("pharmaCart")) || [];
    const [data, setData] = useState(0);
    const toast = useToast()
    const statuses = ['error']
const navigate= useNavigate();
    // modal
const sucess=()=>{

        navigate("/Sucess")
}



    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
    }, [data])
    if (cart.length === 0) {
        toast({
            title: `Cart is empty!!!`,
            status: statuses,
            isClosable: true,
        })
    }
    const handleDelete = (id) => {
        cart.splice(id, 1);
        localStorage.setItem("pharmaCart", JSON.stringify(cart));
        setData((r) => r + 1);
    }
    return (
        <div>
            <Box h={"80px"}>
                <Center>
                    <Button onClick={onOpen} bg={"blue"} color={"white"} w={"200px"} mt={"20px"} ml={"70%"}>Checkout</Button>
                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader color={"teal"}>PAYMENT DETAILS</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <label color="teal">First Name:</label>
                                <Input type="name" placeholder="Enter your first name"/>
                                
                                <label color="teal">Last Name:</label>
                                <Input type="name" placeholder="Enter your last name " />
                                <label color="teal" for="ccn">Credit Card Number:</label>
                                <Input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx -xxxx- xxxx- xxxx"></Input>
                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={sucess}colorScheme='teal' mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Center>
            </Box>
           
            <SimpleGrid columns={[1, 2, 3, 4]} mt={"20px"} >
                {
                    cart.map(({ url, title, price }, ind) => (
                        <div>
                            <Center>
                                <Image src={url} w={"100px"} h={"200px"} />
                            </Center>
                            <Center>
                                <Text w={"250px"} color={"teal.500"}>{title}</Text>
                            </Center>
                            <Center>
                                <Text color={"blue"}>{price}</Text>
                            </Center>
                            <Center>
                                <Button color={"white"} bg={"red"} onClick={() => handleDelete(ind)}>DELETE</Button>
                            </Center>
                            
                        </div>
                    )

                    )
                }
            </SimpleGrid>

        </div>
    )
}

export default Cart