import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ShoppingCart from './Pages/ShoppingCart'
import ShopList from './Pages/ShopList'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import SinglePage from './Pages/SinglePage'
import CheckOut from './Pages/CheckOut'



const App = () => {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/shoplist" element={<ShopList />}>Shop</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/shopingcart" element={<ShoppingCart />}>Contact</Route>
        <Route path='/singlepage/:id' element={<SinglePage />}>Single Page</Route>
        <Route path="/checkout" element={<CheckOut />}>Check Out</Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App