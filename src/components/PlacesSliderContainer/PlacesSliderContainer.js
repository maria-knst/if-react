import React from 'react';
import Arrow from "../Arrow/Arrow";

import PlaceElement from "../PlaceElement/PlaceElement";
import './PlacesSliderContainer.css';

const PlacesSliderContainer = (props) => {
    return (
        <div className="places__flex-container col-12" id={props.id}>
            <Arrow id="places__arrow-prev" />
            {props.elements.map((item) => (
                <PlaceElement
                    key={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    country={item.country}
                    city={item.city}
                />
            ))}
            <Arrow id="places__arrow-next" />
        </div>
    );
};

export default PlacesSliderContainer;