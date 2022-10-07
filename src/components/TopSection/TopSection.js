import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import Heading from '../Heading/Heading'
import TopApps from '../TopApps/TopApps'

import './TopSection.css'
import backgroundImage from '../../images/Top-section-castelmezzano.jpg'

const TopSection = ({ children, isAutoriz, setAutoriz }) => {
  return (
    <header
      className="top-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <TopFrame isAutoriz={isAutoriz} setAutoriz={setAutoriz} />
      <div className="container col-12">
        {isAutoriz ? (
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
