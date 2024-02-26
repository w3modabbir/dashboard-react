import React from 'react'
import NavBar from '../sidebar/navbar/NavBar'
import Footer from '../sidebar/footer/Footer'
import { Outlet } from 'react-router-dom'
import Menu from '../sidebar/menu/Menu'
import './layout.scss'

const LayOut = () => {
  return (
   <>
       <div className='main'>
            <NavBar/>
            <div className="contant">
                <div className="manucontainer">
                    <Menu/>
                </div>
                <div className="contentcontainer">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
       </div>
   </>
  )
}

export default LayOut