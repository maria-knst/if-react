import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import TopText from '../TopText/TopText'
import TopForm from '../TopForm/TopForm'
import TopApps from '../TopApps/TopApps'
import { getMatchedElements } from '../../utils/utils'
import homes_guests_loves_array from '../../utils/homes_guests_loves_array'

import './TopSection.css'

const TopSection = (props) => {
  const createAvailableHotelsSection = (hotels_array) => {
    const result = getMatchedElements(hotels_array, homes_guests_loves_array)
    props.createRequest(result)
  }

  return (
    <header className="top-section">
      <div className="container col-12">
        <TopFrame />
        <TopText>
          Discover stays <br />
          to live, work or just relax
        </TopText>
        <TopForm createRequest={createAvailableHotelsSection} />
        <TopApps />
      </div>
    </header>
  )
}

export default TopSection
