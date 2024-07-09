import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'

 

const Hero = ({heroData,setHeroCount,heroCount}) => {

  
  return (
    <div className='hero'>
      <div className="hero-text">
        <p >{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the fashion</p>
        <img onClick={()=>heroCount===0?setHeroCount(1):setHeroCount(0)} src={arrow_btn} alt="no img" />
      </div>
    </div>
  )
}

export default Hero
