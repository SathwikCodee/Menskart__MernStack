import React from 'react'
import { Link } from 'react-router-dom';
import './Shop.css'
import bottomwear from '../homeslickimg/bottomwear.png'
import topwear from '../homeslickimg/topwear.png'
import accessories from '../homeslickimg/accessories.png'
import footwear from '../homeslickimg/footwear.png'
import eyewear from '../homeslickimg/eyewear.png'
import homewear from '../homeslickimg/homewear.png'
import Popular from '../Components/Popular/Popular'
import Footer from '../Components/Home-footer/Homefooter'
import downarrow from '../homeslickimg/rightarrowshop.png'
import { useEffect } from 'react';
import VismeEmbed from '../Components/VismeEmbed/VismeEmbed';


const Shop = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='shopmain'>
      <VismeEmbed />
      <div>
        <div>
            <div className='banner'>
            </div>
        </div>
        <div class="image-grid">
          
          <div className='subcat'>
            <Link to='/topwear' style={{textDecoration:'none', color:'black'}}><img class="image" src={topwear} alt=""/>
            <p>Top Wear</p></Link>
          </div>
          <div className='subcat'>
            <Link to='/bottomwear' style={{textDecoration:'none', color:'black'}}><img class="image" src={bottomwear} alt=""/>
            <p>Bottom Wear</p></Link>
          </div>
          <div className='subcat'>
            <Link to='/accessories' style={{textDecoration:'none', color:'black'}}><img class="image" src={accessories} alt=""/>
            <p>accessories</p></Link>
          </div>
          <div className='subcat'>
            <Link to='/eyewear' style={{textDecoration:'none', color:'black'}}><img class="image" src={eyewear} alt=""/>
            <p>Eye Wear</p></Link>
          </div>
          <div className='subcat'>
            <Link to='/footwear' style={{textDecoration:'none', color:'black'}}><img class="image" src={footwear} alt=""/>
            <p>Foot Wear</p></Link>
          </div>
          <div className='subcat'>
            <Link to='/homewear' style={{textDecoration:'none', color:'black'}}><img class="image" src={homewear} alt=""/>
            <p>Home Wear</p></Link>
          </div>
        </div>
      </div>

      <Popular 
      name='Top Wear'
      category='topWear'
      />
      <div className='viewmore'>
        <p><Link style={{textDecoration:'none', color:'black'}} to='/topwear'>View More </Link></p>
        <img src={downarrow} alt="" />
      </div>
      <Popular 
      name='Bottom Wear'
      category='bottomWear'
      />
      <div className='viewmore'>
        <p><Link style={{textDecoration:'none', color:'black'}} to='/bottomwear'>View More </Link></p>
        <img src={downarrow} alt="" />
      </div>
      <Popular 
      name='Accesories'
      category='accessories'
      />
      <div className='viewmore'>
        <p><Link style={{textDecoration:'none', color:'black'}} to='/accessories'>View More </Link></p>
        <img src={downarrow} alt="" />
      </div>
      <Popular 
      name='Eye Wear'
      category='eyeWear'
      />
      <div className='viewmore'>
        <p><Link style={{textDecoration:'none', color:'black'}} to='/eyewear'>View More </Link></p>
        <img src={downarrow} alt="" />
      </div>
      <Popular 
      name='FootWear'
      category='footWear'
      />
      <div className='viewmore'>
        <p><Link style={{textDecoration:'none', color:'black'}} to='/footwear'>View More </Link></p>
        <img src={downarrow} alt="" />
      </div>
      <Popular 
      name='Home Wear'
      category='homeWear'
      />
      <div className='viewmore'>
        <p><Link style={{textDecoration:'none', color:'black'}} to='/homewear'>View More </Link></p>
        <img src={downarrow} alt="" />
      </div>
      <Footer/>

    </div>
  )
}

export default Shop
