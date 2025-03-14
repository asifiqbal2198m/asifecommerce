import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import React from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
