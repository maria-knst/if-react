import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import Heading from '../Heading/Heading'
import TopApps from '../TopApps/TopApps'

import './TopSection.css'
import backgroundImage from '../../images/Top-section-castelmezzano.jpg'

const TopSection = ({ children, isAutoris }) => {
  return (
    <header
      className="top-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <TopFrame />
      <div className="container col-12">
      {isAutoris ? (
          <>
            <Heading>
              Discover stays <br />
              to live, work or just relax
            </Heading>
            {children}
            <TopApps />
          </>
      ) : (
          <>{children}</>
      )}
        </div>

    </header>
  )
}

export default TopSection
