import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import Heading from '../Heading/Heading'
import TopForm from '../TopForm/TopForm'
import TopApps from '../TopApps/TopApps'
import {BASE_PATH} from '../../utils/utils'

import './TopSection.css'
import backgroundImage from '../../images/Top-section-castelmezzano.jpg'


const TopSection = (props) => {
  const createAvailableHotelsSection = (hotels_array) => {
    fetch(BASE_PATH + `?search=${hotels_array}`)
        .then(req => req.json())
        .then(data => {
          props.createRequest(data)
        });
  }

  return (
    <header
      className="top-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
