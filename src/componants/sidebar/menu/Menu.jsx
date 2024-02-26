import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";

const Menu = () => {
  return (
    <div className='menu_main'>
      <div className="menu_item">
        <h4 className='title'>Mian</h4>
          <Link to="/" className='list_item'>
            <MdHome />
            <h3 className='hometitle'>Home</h3>
          </Link>
          <Link to="/" className='list_item'>
            <MdHome />
            <h3 className='hometitle'>Profile</h3>
          </Link>
      </div>
      <div className="menu_item">
        <h4 className='title'>Mian</h4>
        <Link to="/" className='list_item'>
            <MdHome />
            <h3 className='hometitle'>Home</h3>
          </Link>
          <Link to="/" className='list_item'>
            <MdHome />
            <h3 className='hometitle'>Profile</h3>
          </Link>
      </div>
    </div>
  )
}

export default Menu