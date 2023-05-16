import React from 'react'
import './Navbar.css'

const Nav = () => {
  return (
    <div className='navbar'>
    <h1 className='logo'>SEOMaster</h1>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Service</a></li>
      <li><a href='#'>Project</a></li>
      <li><a href='#'>Pages</a></li>
      <li><a href='#'>Contect</a></li>
      <button className='btn'>Pro Version</button>
    </ul>
    </div>
  )
}

export default Nav
 