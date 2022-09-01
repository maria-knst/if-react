import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import Heading from '../Heading/Heading'
import TopApps from '../TopApps/TopApps'

import './TopSection.css'
import backgroundImage from '../../images/Top-section-castelmezzano.jpg'

const TopSection = (props) => {

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
        {props.children}
        <TopApps />
      </div>
    </header>
  )
}

export default TopSection
