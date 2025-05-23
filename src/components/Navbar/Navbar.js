import React from 'react'
import "./Navbar.scss"

export default function Navbar() {
  return (
   <nav className='navbar'>
    <h3 className='logo'>City Sights</h3>
    <ul className='nav-links'>
        <li>
            <a href='/' className='nav-link'>
                Home
            </a>
        </li>
        <li>
            <a href='/' className='nav-link'>
               About 
            </a>
        </li>
        <li>
            <a href='/' className='nav-link active'>
              Tours  
            </a>
        </li>
    </ul>
   </nav>
  )
}
