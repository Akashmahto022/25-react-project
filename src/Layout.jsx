import React from 'react'
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
