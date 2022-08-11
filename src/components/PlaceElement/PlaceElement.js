import React from 'react';
import './PlaceElement.css';

const PlaceElement = ({imageUrl, name, country, city, my_id}) => {
    return (
        <div className="places__element col-3">
            <img
                src={imageUrl}
                id={my_id}
                className="places__image"
                alt="home-img"
            />
            <div className="places__home-description">
                <p className="places__label">{name}</p>
                <p className="homes__destination">{city}, {country}
                </p>
            </div>
        </div>
    );
};

export default PlaceElement;