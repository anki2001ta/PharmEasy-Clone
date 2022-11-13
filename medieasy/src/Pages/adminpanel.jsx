import { Center, Input, SimpleGrid,Button, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useRef } from 'react'

const Adminpanel = () => {
    const id=useRef();
    const title=useRef();
    const image=useRef();
    const price=useRef();
    const toast = useToast()
  const statuses = ['success', 'error']
    const deleteFromServer=(id)=>{
        axios.delete(`/test/${id}`)
        .then(()=>{
            toast({
                title: `Sucessfully Deleted`,
                status:statuses[0],
                isClosable: true,
              })
        })
        .catch(()=>{
            toast({
                title: `Error Occured while Deleting`,
                status:statuses[1],
                isClosable: true,
              })
        })
    }

    const addToServer=()=>{
        let product={
            id:id.current.value,
            url:image.current.value,
            title:title.current.value,
            price:price.current.value
        }
        axios.post('/test',product)
        .then(()=>{
            toast({
                title: `Sucessfully Added`,
                status:statuses[0],
                isClosable: true,
              })
        })
        .catch(()=>{
            toast({
                title: `Error Occured while Adding`,
                status:statuses[1],
                isClosable: true,
              }) 
        })
    }

    return (
        <div>
            <Center>
                <SimpleGrid columns={1} gap={"10px"} w={"500px"} mt={"40px"}>
                <Input ref={id} type="text" placeholder='Enter Product ID here....' />
                    <Input ref={title} type="text" placeholder='Enter Product Name here....' />
                    <Input ref={image} type="text" placeholder='Enter Image URL here...' />
                    <Input ref={price} type="text" placeholder='Enter Price here...' />
                    <SimpleGrid columns={[1,1,2,2]}>
                    <Button onClick={addToServer} color={"white"} bg={"teal.600"}> ADD</Button>
                    <Button onClick={()=>deleteFromServer(id.current.value)} color={"white"} bg={"pink.600"}> DELETE</Button>
                    </SimpleGrid>
                </SimpleGrid>
            </Center>
        </div>
    )
}

export default Adminpanel