import React from 'react'
import './Homefooter.css'
import { Link } from 'react-router-dom'

const Homefooter = () => {
  return (
    <div>
      <div className='homepagefoot'>
      <div className='homepage-footer-section'>
        <div className='homepage-footer-col1'>
          <li className='col1-li'><Link to='/home' style={{textDecoration:'none', color:'black'}}>Home</Link></li>
          <li className='col1-li'><Link to='/shop' style={{textDecoration:'none', color:'black'}}>Shop</Link></li>
          <li className='col1-li'><Link to='/about' style={{textDecoration:'none', color:'black'}}>About</Link></li>
          <li className='col1-li'><Link to='/blog' style={{textDecoration:'none', color:'black'}}>Blog</Link></li>
          <li className='col1-li'><Link to='/cart' style={{textDecoration:'none', color:'black'}}>Cart</Link></li>
        </div>

        <div className='homepage-footer-col2'>
          <li>Bhimavaram</li>
          <li>Andra Pradesh, 534202</li>
          <br/>
          <li>Email: info@menskart.com</li>
          <li>Tel: 91*****</li>
        </div>
        <div className='homepage-footer-col3'>
          <li>Shipping & Returns</li>
          <li>FAQ</li>
        </div>
        <div className='homepage-footer-col4'>
          <li>Recieve all our news and updates</li>
          <li className='input'><input type="text" placeholder='Email Address*'/></li>
          <button className='subs'>Subscribe</button>
        </div>
        
      </div>
      <hr></hr>
      <p className='footerp'>©2024 by M | K Menswear. Powered and secured by M | K</p>  

    </div>
    </div>
  )
}

export default Homefooter
