import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

import logo from "../../assests/logo.png"
const Navbar = () => {
  return (
    <nav>
         <div className="navbar">
              <Link to="/" className='nav-item nav-btn'>
                <img src={logo} alt="logo"  />
              </Link>
         </div>
    </nav>
  )
}

export default Navbar
