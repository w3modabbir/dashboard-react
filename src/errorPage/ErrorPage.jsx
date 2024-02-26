import React from 'react';
import Button from '../componants/btn/Button';
import './errorpage.scss'

const ErrorPage = () => {
  return (
    <div className="error">
        <h2>Error 404 Not Found</h2>
        <Button text="Back to Home"/> 
    </div>
  )
}

export default ErrorPage