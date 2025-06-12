import React, { Component } from 'react'
import './SightTourList.scss'
import SightTour from '../SightTour/SightTour'
import { SightTourData } from '../SightTourData'

export default class SightTourList extends Component {
  state ={
    tours: SightTourData
  };
  render() {
    const {tours} = this.state;
    return (
   <section className='tourList'>
    {tours.map(tour => {
      return(
        <SightTour key={tour.id} 
        tour={tour}/>
      )
    })}
   </section>
    )
  }
}

