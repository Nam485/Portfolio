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
        <span className="line2">Frontend developer</span>
      </h1>
      <p>I am a motivated and versatile individual, eager to take on new challenges. Dedicated to delivering high-quality results, I bring a positive attitude and a growth mindset to every project..</p>
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
