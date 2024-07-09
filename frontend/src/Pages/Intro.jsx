import { useState } from "react"
import Background from "../Components/Background/Background";
import Hero from "../Components/Hero/Hero";
import React from 'react'
import { useEffect } from "react";

import './intro.css'

import video2 from '../assets/video2.mp4'

const Intro = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let heroData = [
    {text1:"Dive into",text2:"Fashion You Love"},
    {text1:"Wear",text2:" What You Love"}

  ]
  const [heroCount,setHeroCount] = useState(1);

  return (
    <div style={{maxHeight:'100vh'}} className="intro_section">

      <Background playStatus = {true} heroCount = {heroCount} video={video2}/>
      <Hero
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      />  
    </div>
  )
}

export default Intro
