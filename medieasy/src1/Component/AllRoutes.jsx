import React from 'react'
import{Route,Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Productt from "../Pages/Productt"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Productt" element={<Productt/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes