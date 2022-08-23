import React from 'react'
import Title from '../Title/Title'
import PlacesSliderContainer from '../PlacesSliderContainer/PlacesSliderContainer'
import './AvailableHotelsSection.css'

const AvailableHotelsSection = ({ array }) => {
  return (
    <section className="available-hotels">
      <div className="container col-12">
        <Title textContent="Available hotels" />
        <PlacesSliderContainer elements={array} />
      </div>
    </section>
  )
}

export default AvailableHotelsSection
