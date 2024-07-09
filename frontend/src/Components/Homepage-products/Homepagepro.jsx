import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import rightarrow from '../../homeslickimg/slickLeftside.png'
import leftarrow from '../../homeslickimg/slickRightside.png'
import './Homepagepro.css'
import { useEffect } from "react";
import { useState } from "react";


function Homepagepro() {

  const [new_collections , setNew_collection] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))
  },[])

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <div><img src={leftarrow} alt="" style={{width:'20px', height:'40px'}}/></div>,
    prevArrow: <div><img src={rightarrow} alt="" style={{width:'20px', height:'40px'}}/></div>,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
    
  };
  return (
    <div className="main">
      <div className='head'><h1>NEW COLLECTIONS</h1></div>
      <div className="slider-container">
      <Slider {...settings}>

        {new_collections.map((item,i)=>{
          return (
            <div className="slide-item" key={i}>
            <div className="image-hover">
              <img className='original' src={item.image} alt="" />
              <img className="hover" src={item.image} alt="" />
              <p className="image-hover-text">Quick View</p>
            </div>
            <div className="matter">
              <div>
                <p> {item.name}</p>
              </div>
              <div>
                <p>{item.new_price}</p>
              </div>
            </div>
          </div>
          );          

        })}

       </Slider>
      </div>
    </div>
  );
}

export default Homepagepro;
