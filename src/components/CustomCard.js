import React from 'react';
import './CustomCard.css';
import { useState } from 'react';

const CustomCard = ({ imageSrc, heading, description,url}) => {
  
  const [click, setClick] = useState(false);
  
  const handleClick = (e) => { 
    setClick(!click);
    
  }
  return (
    <div className="custom-card">
      <div className="front">
        <img src={imageSrc} alt={heading} className="card-image" />
        <h3 className="card-heading">{heading}</h3>
      </div>
      <div className="back">
        <a href="#know-more" className={click ? "display" : "know-more-button"} onClick={handleClick}>{click ? 'GitHub' : 'Know More'}</a>
        <a href={url} className= {click ? 'display-github' : 'display'}>GitHub</a>
        <div className={click ? 'display-description' : 'display'}>{description}</div>
        
      </div>
    </div>
  );
};

export default CustomCard;