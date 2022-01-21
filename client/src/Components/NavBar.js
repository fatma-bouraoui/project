import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
function NavBar() {
    return ( 
       <div className='nav'>
        <ul>
        <li><Link to='/'>Home</Link> </li> 
         <li><Link to='/signup'> Contact us</Link></li>
          <li><Link to='/service'> Services</Link></li>
          <li><Link to='/reason'> About us</Link></li>
        </ul>
        
      </div>
    )
}

export default NavBar
