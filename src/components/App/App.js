import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import HomesSection from '../HomesSection/HomesSection'
import TopSection from '../TopSection/TopSection'
import AvailableHotelsSection from '../AvailableHotelsSection/AvailableHotelsSection'
import TopForm from '../TopForm/TopForm'
import HotelPage from '../HotelPage/HotelPage'
import Footer from '../Footer/Footer'
import AuthorizationBlock from '../AuthorizationBlock/AuthorizationBlock'


import { isAuthorizeSelector } from '../../redux/ducks/authorization/authoriz_selectors'
import { availableHotelsSelector } from "../../redux/ducks/search/search_selectors";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";

function App() {
  const isAuthorize = useSelector(isAuthorizeSelector)
  const availableHotelsArray = useSelector(availableHotelsSelector)

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
                  {!!availableHotelsArray.length && (
                    <AvailableHotelsSection array={availableHotelsArray} />
                  )}
                    <AdvantagesSection />
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
