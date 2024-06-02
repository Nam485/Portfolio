import React from 'react';
import { FaDatabase, FaDesktop, FaPalette, FaPen } from 'react-icons/fa';
import Services_Data from '../../assets/services_data';
import './Service.css';

const icons = [FaDesktop, FaDatabase, FaPalette, FaPen];

const Service = () => {
  return (
    <div id='services' className='service'>
      <div className="service-title">
        <h1>My <span>Services</span></h1>
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => {
          const Icon = icons[index % icons.length]; // Cycle through icons
          return (
            <div key={index} className="service-format">
              <div className="service-icon">
                <Icon size={50} /> {/* Adjust size as needed */}
              </div>
              <div className="service-content">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                {/* <div className="service-readmore">
                  <p>Read More</p>
                  <img src={arrow_icon} alt="" />
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
