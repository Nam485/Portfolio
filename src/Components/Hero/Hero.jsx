import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import nam from '../../assets/nam.jpg';
import resumePDF from '../../assets/namit.pdf'; // Import your resume PDF file
import './Hero.css';
  

const Hero = () => {
  const handleDownload = () => {
    window.open(resumePDF); // Open the PDF in a new tab
  };

  return (
    <div id="home" className='hero'>
      <div className='hero-image-container'>
        <div className="animated-lines"></div>
        <img src={nam} alt="Namit Goyal" className='hero-image' />
      </div>
      <h1 className='typing-effect'>
        <span className="line1">I'm Namit Goyal,</span>
        <span className="line2">Web Developer</span>
      </h1>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/namit-goyal-743315227/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/Nam485" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/goyal_namit/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownload}>Get my resume</div>
      </div>
    </div>
  );
};

export default Hero;
