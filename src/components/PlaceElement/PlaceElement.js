import React from 'react'

const PlaceElement = ({ imageUrl, name, country, city}) => {

  return (
    <div className="places__element col-3">
      <img src={imageUrl} className="places__image" alt="home-img" />
      <div className={`places__home-description`}>
        <p className="places__label">{name}</p>
        <p className="homes__destination">
          {city}, {country}
        </p>
      </div>
    </div>
  )
}

export default PlaceElement
