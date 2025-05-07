import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import SearchItems from './components/SearchItems'
import ProductDetails from './components/ProductDetails'
import  { items } from './components/Data'
import { useState } from 'react'



function App() {
  const [data, setData] =useState([...items])
  
  return (
    <>
    <Router>
      
    <Navbar setData={setData}/>
    <Routes>
      <Route path='/' element={<Product items={data}/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/search/:term' element={<SearchItems/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      
      
    </Routes>
   
    </Router>
    </>
  )
}

export default App