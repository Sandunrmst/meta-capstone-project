
import { useState } from 'react'
import logo from '../images/logo.svg'

import { Link } from 'react-router-dom'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuToggler =() => {
        setMenuOpen(!menuOpen)
    }
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`} >
        <a href='/'>
            <img src={logo}/>
        </a>

        <div className='menu-icon' onClick={menuToggler}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            
        </div>

        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><a href='/'>About</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Menu</a></li>
            {/* <li><Link to="/booking">Reservations</Link></li> */}
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          
        </ul>

    </nav>
  )
}

export default Nav