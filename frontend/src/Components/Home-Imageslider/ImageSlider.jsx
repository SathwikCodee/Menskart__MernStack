import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import img1 from '../../homeslickimg/1.png';
import img2 from '../../homeslickimg/2.png';
import img3 from '../../homeslickimg/3.png';
import img4 from '../../homeslickimg/4.png'
import './ImageSlider.css';
import leftarrow from '../../homeslickimg/slickLeftside.png';
import rightarrow from '../../homeslickimg/slickRightside.png';

function ImageSlider() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:2000,
    nextArrow: <div><img   src={rightarrow} alt="" style={{width:'30px', height:'40px'}}/></div>,
    prevArrow: <div ><img src={leftarrow} alt="" style={{width:'30px', height:'40px'}}/></div>,

  }
  return (

    <div className='homepage-slider'>
      
      <div className='totalhomepage'>
        <div className="slider-container">
          <Slider  {...settings}>
          <div>
            <img src={img1} alt=''/>
          </div>
          <div>
            <img src={img2} alt=''/>
          </div>
          <div>
            <img src={img3} alt=''/>
          </div>
          <div>
            <img src={img4} alt=''/>
          </div>
          </Slider>
        </div>
      
      </div>
    </div>
    
  );
}

export default ImageSlider;
