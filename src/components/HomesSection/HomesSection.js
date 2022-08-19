import React from 'react';
import Title from "../Title/Title";
import PlacesSliderContainer from "../PlacesSliderContainer/PlacesSliderContainer";
import homes_guests_loves_array from "../../utils/homes_guests_loves_array";

const HomesSection = () => {
    return (
        <section className="homes">
            <div className="container homes__container">
                <Title textContent="Homes guests loves" />
                <PlacesSliderContainer
                    elements={homes_guests_loves_array}
                />
            </div>
        </section>
    );
};

export default HomesSection;