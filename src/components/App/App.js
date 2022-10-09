import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import HomesSection from '../HomesSection/HomesSection'
import TopSection from '../TopSection/TopSection'
import AvailableHotelsSection from '../AvailableHotelsSection/AvailableHotelsSection'
import { useState } from 'react'
import TopForm from '../TopForm/TopForm'
import React from 'react'

import { BASE_PATH } from '../../utils/utils'
import HotelPage from '../HotelPage/HotelPage'
import Footer from '../Footer/Footer'
import AuthorizationBlock from '../AuthorizationBlock/AuthorizationBlock'
import { useSelector } from 'react-redux'
import { isAuthorizeSelector } from '../../ducks/authorization/authoriz_selectors'

function App() {

  const isAuthorize = useSelector(isAuthorizeSelector)
  const availableHotelsArray = useSelector((state) => state.search.data)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {isAuthorize ? (
                <>
                  <TopSection>
                    <TopForm />
                  </TopSection>
                  {(!!availableHotelsArray.length) && (
                    <AvailableHotelsSection array={availableHotelsArray} />
                  )}
                  <HomesSection />
                  <Footer />
                </>
              ) : (
                <TopSection>
                  <AuthorizationBlock />
                </TopSection>
              )}
            </div>
          }
        />
        <Route path="/hotel/:hotelId" element={<HotelPage />} />
      </Routes>
    </Router>
  )
}

export default App
