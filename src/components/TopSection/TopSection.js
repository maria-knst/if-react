import React from 'react'
import TopFrame from '../TopFrame/TopFrame'
import './TopSection.css'
import TopText from '../TopText/TopText'
import TopForm from '../TopForm/TopForm'

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
      </div>
    </header>
  )
}

export default TopSection
