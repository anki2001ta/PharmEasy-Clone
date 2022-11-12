import React, { useState } from 'react'
import { Tread,data } from './Tread';
import { Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import axios from 'axios';



const Productt = () => {
  let id = data;
  console.log(id)
  let base_url = `https://harmless-towering-cardboard.glitch.me/Trending?id=${id}`
  
 const [data1, setTrd] = useState([])
  useEffect(() => {
    axios.get(base_url)
      .then((res) => setTrd(res.data))
    
  }, [])
 
  return (
    <div key={id}>
       {
       data1.length > 0 && data1.map(el=>(
        <Image src={el.url} alt='Error'/>
        
       ))
                    
       }
       {/* <Image src='https://cdn01.pharmeasy.in/dam/products_otc/I00623/cetaphil-gentle-skin-cleanser-125ml-2-1652870126.jpg?dim=1440x0'/> */}
    </div>
  )
}

export default Productt