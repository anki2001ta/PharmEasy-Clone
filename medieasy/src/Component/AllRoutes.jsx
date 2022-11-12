import React from 'react'
import{Route,Routes} from "react-router-dom"
import Demo from '../Pages/Demo'
import Home from '../Pages/Home'
import Productt from "../Pages/Productt"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/productt/:id" element={<Productt/>}/>
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes