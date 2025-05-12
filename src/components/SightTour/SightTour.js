import React from 'react'

const SightTour = () => {
  return (
    <article className='tour'>
      <div className='image-container'>
        <img width="250"
          src='https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=600'
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
