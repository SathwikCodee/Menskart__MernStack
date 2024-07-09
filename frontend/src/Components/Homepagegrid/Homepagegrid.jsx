import React from 'react'
import './Homepagegrid.css'
import pant from '../../homeslickimg/pant.jpg'
import shirt from '../../homeslickimg/shirt.jpg'
import accessories from '../../homeslickimg/accessories.jpg'
import glasses from '../../homeslickimg/glasses.jpg'
import footwear from '../../homeslickimg/footwear.jpg'
import home from '../../homeslickimg/home.jpg'
import { Link } from 'react-router-dom'


const Homepagegrid = () => {
  return (

    <div className="newbox">
        <div className="center-box">
            <div className="final-sale">
                <h1>FINAL</h1>
                <h2>SALE !!</h2>
            </div>
            <div className="get-30">Get 30% Off</div>
        </div>

        <div className='categories'>
        <div className='categories-image-container  top_1'>
          <Link to='/topwear'>
            <div>
              <img src={shirt} alt="" />
              <div className='image-overlay'>
                <p>Top Wear</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='categories-image-container top_2'>
          <Link to='/bottomwear'>
            <div>
              <img src={pant} alt="" />
              <div className='image-overlay'>
                <p>Bottom Wear</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='categories-image-container top_3'>
          <Link to='/accessories'>
            <div>
              <img src={accessories} alt="" />
              <div className='image-overlay'>
                <p>Accessories</p>
              </div>
            </div>
          </Link>
        </div>
        </div>
        <div className='categories'>
        <div className='categories-image-container top_1'>
          <Link to='/eyewear'>
            <div>
              <img src={glasses} alt="" />
              <div className='image-overlay'>
                <p>Eye Wear</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='categories-image-container top_2'>
          <Link to='/footwear'>
            <div>
              <img src={footwear} alt="" />
              <div className='image-overlay'>
                <p>Foot Wear</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='categories-image-container top_3'>
          <Link to='/homewear'>
            <div>
              <img src={home} alt="" />
              <div className='image-overlay'>
                <p>Home Wear</p>
              </div>
            </div>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Homepagegrid
