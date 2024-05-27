import React from 'react'
import Services_Data from '../../assets/services_data'
import './Service.css'

const Service = () => {
  return (
    <div id='services' className='service'>
        <div className="service-title">
            <h1>My Services</h1>
        <div className="underline underline-1"></div>
        <div className="underline underline-2"></div>
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    {/* <div className="service-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div> */}
                </div>
            })}
        </div>
    </div>
  )
}

export default Service
