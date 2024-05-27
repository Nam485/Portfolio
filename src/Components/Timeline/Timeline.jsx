import React from 'react';
import logo1 from '../../assets/b-logo.png';
import logo3 from '../../assets/m-logo.png';
import logo2 from '../../assets/s-logo.png';
import './Timeline.css';

const Timeline = () => {
  return (
    <div id='timeline'>
    <div className="timeline-title">
    <h1>Education</h1>
    <div className="underline underline-3"></div>
    <div className="underline underline-4"></div>
  </div>
    <div className='timeline'>
      <div className="container left-container">
        <img src={logo1} alt="" />
        <div className="text-box">
            <h2>Birla Institute of Technology, Mesra</h2>
            <small>2021-2025</small>
            <p>Btech-CSE</p>
            <p>CGPA: 8.40</p>
            <span className='left-container-arrow'></span>
        </div>
      </div>
      <div className="container right-container">
        <img src={logo2} alt="" />
        <div className="text-box">
            <h2>Sarvodaya Sikshan Sansthan</h2>
            <small>2020-2021</small>
            <p>Science Stream (PCM)</p>
            <p>Score: 96.8%</p>
            <span className='right-container-arrow'></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={logo3} alt="" />
        <div className="text-box">
            <h2>Maruti Inter School</h2>
            <small>2018-2019</small>
            <p>Secondary Education</p>
            <p>Score: 86.67%</p>
            <span className='left-container-arrow'></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Timeline
