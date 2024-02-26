import React from 'react'
import NavBar from '../sidebar/navbar/NavBar'
import Footer from '../sidebar/footer/Footer'

import { Outlet } from 'react-router-dom'
import Menu from '../sidebar/menu/Menu'

const LayOut = () => {
  return (
   <>
       <div className='main'>
            <NavBar/>
            <div className="contaier">
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