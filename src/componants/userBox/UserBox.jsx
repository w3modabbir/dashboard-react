import React from 'react'
import { UserData } from '../../data'
import Image from '../Image'
import './userbox.scss'

const UserBox = () => {
  return (
    <div className='userbox_main'>
        <h2>User List</h2>
        <div className="user_list">
            {UserData.map((user)=>(
                <div key={user.id} className="user_item">
                    <div className="user_info">
                        <div className="user_img">
                            <Image source={user.img} alt="not found"/>
                        </div>
                        <div className="user_contant">
                            <h3>{user.username}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className="user_amount">{user.amount}</div>
                </div>
            ))

            }
        </div>
    </div>
  )
}

export default UserBox