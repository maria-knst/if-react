import './App.css'
import HomesSection from '../HomesSection/HomesSection'
import TopSection from '../TopSection/TopSection'
import AvailableHotelsSection from '../AvailableHotelsSection/AvailableHotelsSection'
import { useState } from 'react'

function App() {
  const [availableHotelsArray, setAvailableHotelsArray] = useState([])
  const [hotelsIsVisible, setHotelsVisible] = useState(false)

  const setGoodHotelsArray = (newArray) => {
    if (newArray.length) {
      setHotelsVisible(true)
      setAvailableHotelsArray(newArray)
    } else {
      setHotelsVisible(false)
      alert('Nothing is find')
    }
  }

  return (
    <div className="App">
      <TopSection createRequest={setGoodHotelsArray} />
      {hotelsIsVisible && (
        <AvailableHotelsSection array={availableHotelsArray} />
      )}
      <HomesSection />
    </div>
  )
}

export default App
