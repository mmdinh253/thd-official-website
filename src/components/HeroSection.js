import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const images = [
  process.env.PUBLIC_URL + '/images/grouppic.jpg',
  process.env.PUBLIC_URL + '/images/mass.jpg',
  process.env.PUBLIC_URL + '/images/retreatgrouppic.jpg',
  process.env.PUBLIC_URL + '/images/bngrouppic.jpg',
  process.env.PUBLIC_URL + '/images/hlht.jpg'
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="hero-container">
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* <h1>Doan Teresa Hai Dong Giesu</h1> */}

      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => (window.location.href = "https://www.youtube.com/watch?v=V7vdjOkX-v4")}
        >
          Watch this to learn more <i className='far fa-play-circle' />
        </Button>
      </div>

      {/* Navigation Buttons */}
      <button className="prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&#10094;</button>
      <button className="next" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&#10095;</button>
    </div>
  );
}

export default HeroSection;