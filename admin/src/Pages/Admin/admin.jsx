import React from 'react'
import './admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

const admin = () => {
  return (
    <div className='full-admin-page'> 
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/listproduct' element={<ListProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default admin
