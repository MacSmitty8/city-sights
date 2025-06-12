import React, { useState } from 'react';
import "./SightTour.scss";

const SightTour = ({ tour, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  const { id, city, img, name, info } = tour;
  return (
    <article className='tour'>
      <div className='image-container'>
        <img 
          src={img}
          alt={name} 
        />
        <span className="close-btn" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "} 
          <span onClick={handleInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default SightTour;