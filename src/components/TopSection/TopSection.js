import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import Heading from '../Heading/Heading'
import TopApps from '../TopApps/TopApps'

import './TopSection.css'
import backgroundImage from '../../images/Top-section-castelmezzano.jpg'
import { useSelector } from 'react-redux'
import { isAuthorizeSelector } from '../../redux/ducks/authorization/authoriz_selectors'

const TopSection = ({ children }) => {
  const isAuthorize = useSelector(isAuthorizeSelector)

  return (
    <header
      className="top-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <TopFrame />
      <div className="container col-12">
        {isAuthorize ? (
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
