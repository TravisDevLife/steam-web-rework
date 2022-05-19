import React from 'react'
import { IoLogoSteam } from 'react-icons/io'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
        <div className='navbar-options'>    
            <IoLogoSteam className='navbar-logo'/>
            <ul>
                <li>STORE</li>
                <li>LIBRARY</li>
                <li>COMMUINITY</li>
                <li>SEARCH</li>
            </ul>
        </div>
        <div className='navbar-user'>
            <img src='' />
            <h1>CASACOBRA</h1> 
        </div>
    </nav>
  )
}

export default Navbar