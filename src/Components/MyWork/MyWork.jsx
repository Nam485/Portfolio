import React, { useState } from 'react';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';
import './MyWork.css';

const MyWork = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(6); // Initially show 6 items
  const [selectedWork, setSelectedWork] = useState(null); // Track selected work for modal
  const [showLess, setShowLess] = useState(false); // State to toggle Show Less button

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3); // Show 3 more items when "Show More" is clicked
  };

  const handleShowLess = () => {
    setItemsToShow(6); // Reset to show only 6 items
    setShowLess(false); // Hide Show Less button
  };

  const handleWorkItemClick = (index) => {
    // Set the selected work to show in the modal
    setSelectedWork(mywork_data[index]);
  };

  const closeModal = () => {
    // Close the modal by resetting selected work
    setSelectedWork(null);
  };

  // Calculate the remaining items not displayed
  const remainingItems = mywork_data.length - itemsToShow;

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Recent <span>Work</span></h1>
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, itemsToShow).map((work, index) => (
          <div
            key={index}
            className={`work-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleWorkItemClick(index)}
          >
            <img src={work.w_img} alt="" className="work-image" />
            <div className="work-overlay">
              <div className="tech-stack">
                <p>{work.tech_stack}</p>
              </div>
              <div className="work-description">
                <h3>{work.w_name}</h3>
                <p>{work.short_description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Show Less Buttons */}
      <div className="mywork-showmore">
        {itemsToShow < mywork_data.length && !showLess && (
          <div className="showmore-button" onClick={handleShowMore}>
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
          </div>
        )}
        {showLess && (
          <div className="showmore-button" onClick={handleShowLess}>
            <p>Show Less</p>
            <img src={arrow_icon} alt="" />
          </div>
        )}
      </div>

      {/* Modal or Popup Screen */}
      {selectedWork && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedWork.w_img} alt="" className="modal-image" />
            <div className="modal-details">
              <div className="tech-stack">
                <p>{selectedWork.tech_stack}</p>
              </div>
              <div className="detailed-description">
                <h3>{selectedWork.w_name}</h3>
                <p>{selectedWork.description}</p>
                <a href={selectedWork.github_link} target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
