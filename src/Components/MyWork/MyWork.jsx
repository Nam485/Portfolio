import React, { useState } from 'react';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';
import './MyWork.css';

const MyWork = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(6); // Initially show 6 items

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3); // Show 3 more items when "Show More" is clicked
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <div className="underline underline-1"></div>
        <div className="underline underline-2"></div>
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, itemsToShow).map((work, index) => (
          <div
            key={index}
            className={`work-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={work.w_img} alt="" className="work-image" />
            <div className="work-description">
              <h3>{work.w_name}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
      {itemsToShow < mywork_data.length && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default MyWork;
