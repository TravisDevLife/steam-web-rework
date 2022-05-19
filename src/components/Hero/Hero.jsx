import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [featured, setFeatured] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    fetch("https://store.steampowered.com/api/featured/?cc=EE&l=english&v=1").then(response => response.json()).then(result => {
      setFeatured(result);
      console.log(result);
    });
  },[]);

  return (
    <header className='hero-wrapper'>
      {
        isLoading ? null : 
        <div className='featured-games'>
          <div className='featured-main' style={{backgroundImage: "url(" + ")"}}>

          </div>
        </div>
      }
    </header>
  )
}

export default Hero