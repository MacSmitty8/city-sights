import React, { Component } from 'react'
import './SightTourList.scss'
import SightTour from '../SightTour/SightTour'
import { SightTourData } from '../SightTourData'

export default class SightTourList extends Component {
  state = {
    tours: SightTourData
  };
  removeTour = id => {
     const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;
    console.log(this.state.tours);
    return (

      <section className='tourList'>
        {tours.map(tour => {
  return (
    <SightTour
      key={tour.id}
      tour={tour}
      removeTour={this.removeTour}
    />
  );
})}
      </section>
    )
  }
}

