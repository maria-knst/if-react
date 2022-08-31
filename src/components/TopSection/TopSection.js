import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import Heading from '../Heading/Heading'
import TopForm from '../TopForm/TopForm'
import TopApps from '../TopApps/TopApps'
import { getMatchedElements } from '../../utils/utils'
import homes_guests_loves_array from '../../utils/homes_guests_loves_array'

import './TopSection.css'
import backgroundImage from '../../images/Top-section-castelmezzano.jpg';

const TopSection = (props) => {
  const createAvailableHotelsSection = (hotels_array) => {
    const result = getMatchedElements(hotels_array, homes_guests_loves_array)
    props.createRequest(result)
  }

  return (
    <header className="top-section" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container col-12">
        <TopFrame />
        <Heading>
          Discover stays <br />
          to live, work or just relax
        </Heading>
        <TopForm createRequest={createAvailableHotelsSection} />
        <TopApps />
      </div>
    </header>
  )
}

export default TopSection
