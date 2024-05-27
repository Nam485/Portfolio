import React from 'react';
import logo2 from '../../assets/logo3.png';
import user_icon from '../../assets/user_icon.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo2} alt="Logo" />
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 All right reserved</p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/namit-goyal-743315227/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://github.com/Nam485"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" /></a>
          <a href="https://www.instagram.com/goyal_namit/?next=%2F"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
