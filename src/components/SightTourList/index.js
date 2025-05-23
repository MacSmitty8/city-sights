import React, { Component } from 'react'
import './SightTourList.scss'
import SightTour from '../SightTour/SightTour'
import { SightTourData } from '../SightTourData'

export default class SightTourList extends Component {
  state ={
    tours: SightTourData
  }
  render() {
    console.log(this.state.tours)
    return (
   <section className='tourList'>
    <SightTour />
   </section>
    )
  }
}

