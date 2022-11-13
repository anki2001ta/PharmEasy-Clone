
import { Button, Center, Image, SimpleGrid, Text, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Cart = () => {
    let cart = JSON.parse(localStorage.getItem("pharmaCart")) || [];
    const [data, setData] = useState(0);
    useEffect(() => {

    }, [data])
    if (cart.length === 0) {
        return (
            <div>
                <h1>Cart is empty!!</h1>
            </div>
        )
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

                    <Button mt={"20px"} ml={"90%"}>Checkout</Button>


                </Center>
            </Box>
            <SimpleGrid columns={[1, 2, 3, 3]} mt={"20px"}>
                {
                    cart.map(({ url, title, price }, ind) => (
                        <div>
                            <Center>
                                <Image src={url} w={"100px"} h={"200px"} /></Center>
                            <Center>
                                <Text>{title}</Text></Center>
                            <Center>
                                <Text>{price}</Text>
                            </Center>
                            <Center>
                                <Button onClick={() => handleDelete(ind)}>DELETE</Button>
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