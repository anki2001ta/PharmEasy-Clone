import React, { useState } from 'react'
import {data } from './Tread';
import { Button, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import axios from 'axios';
import "bootstrap"
import Footer from './footer';
import { Link } from 'react-router-dom';




const Productt = (item) => {
  let cart=JSON.parse(localStorage.getItem("pharmaCart")) || [];
// itemscheck
const handleclick=()=>{
  // console.log(item.data)
  addToCart();
  setCount(cart.length)
}

  let id = data;
  console.log(id)
  let base_url = `https://harmless-towering-cardboard.glitch.me/Trending?id=${id}`
  
 const [data1, setTrd] = useState([])
 let [count,setCount]=useState(cart.length)
 const addToCart=()=>{
  cart.push(data1[0]);
  localStorage.setItem("pharmaCart",JSON.stringify(cart));
 }
  useEffect(() => {
    axios.get(base_url)
      .then((res) => setTrd(res.data))
  }, [])
 
  return (
    <div key={id}>
        < div style={{marginTop:"100px",marginLeft:"220px",}} >
       {
       data1.length > 0 && data1.map(el=>(
       
      
        <>
        <Image id="photo" w={"250px"} h={"590px"}src={el.url} alt='Error'/>
        <h1 style={{marginTop:"-500px",fontSize:"20px",width:"650px",marginLeft:"290px",textAlign:"left"}}><b>{el.title2}</b></h1>
        <p style={{marginLeft:"25px",textAlign:"left",marginLeft:"290px",marginTop:"20px"}}>Rating:{el.rating}:⭐⭐⭐⭐⭐</p>
        <strike><p style={{marginLeft:"25px",textAlign:"left",marginLeft:"290px",marginTop:"20px",color:"red"}}>{el.strike}</p></strike>
        <p style={{marginLeft:"25px",textAlign:"left",marginLeft:"290px",marginTop:"20px",color:"green"}}>{el.price}</p>
        <p style={{marginLeft:"25px",textAlign:"left",marginLeft:"290px",marginTop:"20px",width:"450px"}}>{el.about}</p>
        
      <p style={{marginLeft:"25px",textAlign:"left",marginLeft:"290px",marginTop:"10px",width:"450px",color:"blue"}}>{el.delivery}</p>
      
       
        <Button onClick={()=>handleclick(item)} bgColor={"teal"} color={"white"}>ADD TO CART</Button>
        
        <br></br>
        <Link to="/cart">
        <Button bgColor={"teal"} color={"white"} w={"250px"} mt={"-650px"} ml={"655px"}>VIEW CART PAGE</Button>
        </Link>
        <p style={{color:"blue"}}><b>YOUR CART HAS {count} items</b></p>
        </>
        
      
       ))
                    
       }
       </div>
       {/* <Image src='https://cdn01.pharmeasy.in/dam/products_otc/I00623/cetaphil-gentle-skin-cleanser-125ml-2-1652870126.jpg?dim=1440x0'/> */}
       <div style={{marginTop:"200px"}}>
       < Footer/>
       </div>
    </div>
  )
}

export default Productt