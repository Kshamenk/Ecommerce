import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../Login/Login'


const LandingPage = () => {
  
  return (
    <div>
     
        <Link to= '/' >
        <button>Home</button>
        </Link>
        <Login/>
    </div>
    
  )
}

export default LandingPage