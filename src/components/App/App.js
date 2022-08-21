import './App.css'
import HomesSection from '../HomesSection/HomesSection'
import TopSection from '../TopSection/TopSection'
import AvailableHotelsSection from '../AvailableHotelsSection/AvailableHotelsSection'

function App() {
  return (
    <div className="App">
      <TopSection />
      <AvailableHotelsSection />
      <HomesSection />
    </div>
  )
}

export default App
