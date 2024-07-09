import React from 'react'
import './Navbar.css'
import NavLogo from '../../assets/logo.png'
import NavPro from '../../assets/admin.jpg'

const Navbar = () => {
  return (
    <div className='complete-navbar'>
      <img src={NavLogo} alt='NavLogo' className='nav-logo' />
      <h1 className='nav-heading'>Admin Panel</h1>
      <img src={NavPro} alt='NavPro' className='nav-profile'/>
    </div>
  )
}

export default Navbar

