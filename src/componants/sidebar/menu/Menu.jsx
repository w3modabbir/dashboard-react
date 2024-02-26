import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { menu } from '../../../data';
import LoginImg from '../../../assets/svg/home.svg'
import Image from '../../Image';

const Menu = () => {
  return (
    <div className='menu_main'>
      {menu.map((item)=>(
        <div key={item.id} className="menu_item">
          <h4 className='title'>{item.title}</h4>
          {item.listItems.map((listItem)=>(
            <Link to="/" className='list_item' key={listItem.id}>
                {/* <Image  source={listItem.icon} alt="not found"/> */}
              <h3 className='hometitle'>{listItem.title}</h3>
            </Link>
          ))

          }
         
        </div>
      ))
      
      }
      
     
    </div>
  )
}

export default Menu