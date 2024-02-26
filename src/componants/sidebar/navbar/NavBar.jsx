import React from 'react'
import './navbar.scss'
import LogoImg from '../../../assets/images/logo.png'
import Image from '../../Image'
import { CiSearch } from "react-icons/ci";
import { IoMdApps } from "react-icons/io";
import { IoIosExpand } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import UserImg from '../../../assets/images/user.jpg'

const NavBar = () => {
  return (
    <div className='navbar_main'>
      <div className="navbar_logo">
        <Image source={LogoImg} alt="Not Found"/>
      </div>
      <div className="navbar_icons">
        <div>
          <CiSearch />
        </div>
        <div>
          <IoMdApps />
        </div>
        <div>
          <IoIosExpand />
        </div>
        <div className='notification'>
          <MdNotifications />
          <span>2</span>
        </div>
        <div className="user">
          <Image source={UserImg} alt="not found"/>
          <span>Masum</span>
        </div>
        <div>
          <IoSettings />
        </div>
      </div>
    </div>
  )
}

export default NavBar