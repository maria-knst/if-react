import React from 'react'

import TopFrame from '../TopFrame/TopFrame'
import TopText from '../TopText/TopText'
import TopForm from '../TopForm/TopForm'
import TopApps from '../TopApps/TopApps'

import './TopSection.css'

const TopSection = () => {
  return (
    <header className="top-section">
      <div className="container col-12">
        <TopFrame />
        <TopText>
          Discover stays <br />
          to live, work or just relax
        </TopText>
        <TopForm />
        <TopApps />
      </div>
    </header>
  )
}

export default TopSection
