import React from 'react'
import './home.scss'
import UserBox from '../../componants/userBox/UserBox'

const Home = () => {
  return (
    <div className='home_main'>
      <div className="box box1">
        <UserBox/>
      </div>
      <div className="box box2">box2</div>
      <div className="box box3">box3</div>
      <div className="box box4">box4</div>
      <div className="box box5">box5</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  )
}

export default Home