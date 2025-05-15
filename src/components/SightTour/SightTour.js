import React from 'react'
import "./SightTour.scss"

const SightTour = () => {
  return (
    <article className='tour'>
      <div className='image-container'>
        <img 
          src='https://suburbantours.com/wp-content/uploads/nyc-featured.jpg'
          alt='New York' />

        <span className="close-btn">
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>city</h3>
        <h4>name</h4>
        <h5>
        info 
        <span>
         <i className="fas fa-caret-square-down"></i>
        </span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit.
        </p>
      </div>
    </article>
  )
}

export default SightTour
