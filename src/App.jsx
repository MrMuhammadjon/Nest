import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ShopGridSidebar from './Pages/ShopGridSidebar'
import SingleProud from './Pages/SingelProud'// Cart komponentini import qilishni unutmang

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<ShopGridSidebar />} />
        <Route path="/single-product" element={<SingleProud />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App