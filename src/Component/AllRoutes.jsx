import React from 'react'
import{Route,Routes} from "react-router-dom"
import Admin from '../Pages/admin'
import Adminpanel from '../Pages/adminpanel'
import Cart from '../Pages/cart'
import Checkout from '../Pages/checkout'

import Home from '../Pages/Home'
import Productt from "../Pages/Productt"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/productt/:id" element={<Productt/>}/>
       
        <Route
          path="/Cart/"
          element={(
            <Cart/> )}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/adminPanel" element={<Adminpanel/>}/>
          <Route path="/Sucess" element={<Checkout/>}/>
         
      </Routes>
    </div>
  )
}

export default AllRoutes