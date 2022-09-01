import './App.css'
import HomesSection from '../HomesSection/HomesSection'
import TopSection from '../TopSection/TopSection'
import AvailableHotelsSection from '../AvailableHotelsSection/AvailableHotelsSection'
import { useState } from 'react'
import TopForm from "../TopForm/TopForm";
import React from "react";
import { BASE_PATH } from "../../utils/utils";

function App() {
  const [availableHotelsArray, setAvailableHotelsArray] = useState([])
  const [hotelsIsVisible, setHotelsVisible] = useState(false)


  const setGoodHotelsArray = async (hotels_array) => {
    const request = await fetch(BASE_PATH + `?search=${hotels_array}`)
    const result =  await request.json();

    if (result.length) {
      setHotelsVisible(true)
      setAvailableHotelsArray(result)
    } else {
      setHotelsVisible(false)
      alert('Nothing is find')
    }
  }

  return (
    <div className="App">
      <TopSection>
        <TopForm createRequest={setGoodHotelsArray}/>
      </TopSection>
      {hotelsIsVisible && (
        <AvailableHotelsSection array={availableHotelsArray} />
      )}
      <HomesSection />
    </div>
  )
}

export default App
