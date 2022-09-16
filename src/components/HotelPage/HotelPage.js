import React from 'react'

import Footer from '../Footer/Footer'
import TopFrame from '../TopFrame/TopFrame'
import HotelBlock from '../HotelBlock/HotelBlock'

import './HotelPage.scss'

const HotelPage = () => {
  return (
    <div>
      <div className="top-frame-container">
        <TopFrame />
      </div>
      <HotelBlock />
      <Footer />
    </div>
  )
}

export default HotelPage
