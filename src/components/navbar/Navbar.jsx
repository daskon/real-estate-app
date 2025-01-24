import React, { useState } from 'react'
import './navbar.scss';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
        <div className='left'>
          <a href="/" className='logo'>
            <img src='/logo.svg' alt='' />
            <span>DiamondPlants</span>
          </a>
          <a href="/" className=''>Home</a>
          <a href="/">Plants</a>
          <a href="/">Shop</a>
          <a href="/">Agent</a>
        </div>
        <div className='right'>
          <a href="/signin">Signin</a>
          <a href="/register" className='register'>Register</a>
          <div className='menuIcon' onClick={() => setOpenMenu(!openMenu)}>
            <svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#15509d" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <div className={openMenu ? "menu active" : "menu"}>
            <a href="/" className=''>Home</a>
            <a href="/">Property</a>
            <a href="/">Listing</a>
            <a href="/">Agent</a>
            <a href="/">SignIn</a>
            <a href="/">Register</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar