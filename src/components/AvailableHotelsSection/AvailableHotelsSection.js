import React from 'react'
import Title from '../Title/Title'
import PlacesSliderContainer from '../PlacesSliderContainer/PlacesSliderContainer'
import available_hotels_array from "../../utils/available_hotels";

const HomesSection = () => {
    return (
        <section className="homes">
            <div className="container homes__container">
                <Title textContent="Available hotels" />
                <PlacesSliderContainer elements={available_hotels_array} />
            </div>
        </section>
    )
}

export default HomesSection