import React from 'react'
import './Homeourstory.css'
import newbg from '../../homeslickimg/new.jpg'
import newbgi from '../../homeslickimg/newbg.jpg'
import { Link } from 'react-router-dom';

const Homeourstory = () => {
  return (
    <div>
     
        <div className="about-section-row">
          <div className='ourstory one-ourstory ourbuttons'><Link className='view' style={{textDecoration:'none'}} to='/about'>Our Story</Link></div>
          <div className='img_1'><img src={newbg} alt=''/></div>
          <div className='img_2'><img src={newbgi} alt=''/></div>
          <div className='ourstory two-ourstory ourbuttons'><Link className='view' style={{textDecoration:'none'}} to='/blog'>Our Blog</Link></div>
        </div>
        
    </div>

  )
}

export default Homeourstory
