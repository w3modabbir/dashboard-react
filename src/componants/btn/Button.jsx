import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text}) => {
  return (
    <div className="btn">
    <h2>
        <Link to="/">{text}</Link>
    </h2>
    </div>
  )
}

export default Button