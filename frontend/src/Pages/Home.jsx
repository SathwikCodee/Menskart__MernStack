import React from 'react'
import ImageSlider from '../Components/Home-Imageslider/ImageSlider'
import Homepagegrid from '../Components/Homepagegrid/Homepagegrid';
import './Home.css'
import Homeourstory from '../Components/Home-ourstory/Homeourstory';
import Homeservices from '../Components/Home-services/Homeservices';
import Homepagepro from '../Components/Homepage-products/Homepagepro';
import Homefooter from '../Components/Home-footer/Homefooter';
import { useEffect } from 'react';




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

      
    <div className='home-page-1'>
      <ImageSlider/>

      <div className='home-page-2'>
        <div className="container">
          <div>
            <h1 className="heading">
              Welcome to
            </h1>
            <h1 className='heading'>
              Men's Fashion
            </h1>
          </div>

          <div >
            <p className="content">
              Discover the latest trends and elevate your style at our exclusive men's fashion destination.
              Explore a curated collection of premium clothing, footwear, and accessories that embody
              sophistication and modernity.
            </p>
            <h1 className='content'>____________</h1>
            <p className='content mkp'><big>M | K</big><small> a r t</small></p>
          </div>
        </div>
        
        <Homeourstory/>
        
        <Homepagegrid/>

        <Homepagepro/>

        <Homeservices/>

        <Homefooter/>

      </div> 
    </div>
  )
}

export default Home









