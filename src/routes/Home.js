import React from 'react'

import './Home.css';
import yourImage from '../images/portfolio_img.jpg';
import { useEffect } from 'react';
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import Navbar from "../components/Navbar"


const Home = () => {

  useEffect(() => {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.classList.add('loaded');
  }, []);

  return (
    <div className='home-wrapper'>
       <Navbar/>
      <div className='home'>

        
        <div className="image-container">

         <img src={yourImage} alt="Anukriti Saxena" class="circular-image" />

        </div>
        <div className="text-box">

          <h3> Hey, it's me! </h3>
          <ul className='dynamic-txt'>

            <li><span> I am Anukriti Saxena</span></li>
            <li><span>A MERN Stack Developer</span></li>

          </ul>

        </div>
        <ul className='socials'>
           
          <li><a href="https://github.com/Anukriti-2708" className='icon'><SiGithub /></a></li>
          <li><a href="https://leetcode.com/Anukriti_27/" className='icon'><SiLeetcode/></a></li>
          <li><a href="https://www.linkedin.com/in/anukriti-saxena-65842b14a/" className='icon'><SiLinkedin/></a></li>
         
      </ul>
      </div>
       <div class="custom-shape-divider-bottom-1690823229">
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
       </svg>
      </div>
   </div>
  )
}

export default Home