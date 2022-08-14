import './App.css'
import Title from '../Title/Title'
import PlacesSliderContainer from '../PlacesSliderContainer/PlacesSliderContainer'
import homes_guests_loves_array from '../../constants/homes_guests_loves_array'

function App() {
    return (
        <div className="App">
            <section className="homes">
                <div className="container homes__container">
                    <Title textContent="Homes guests loves" />
                    <PlacesSliderContainer
                        id="homes_flex-container"
                        elements={homes_guests_loves_array}
                    />
                </div>
            </section>
        </div>
    )
}

export default App
