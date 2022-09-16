import React from 'react'
import './PlaceElement.css'

import { Link } from 'react-router-dom'

const PlaceElement = ({ imageUrl, name, country, city, imageId }) => {
  return (
    <Link to={`/hotel/${imageId}`} className="places__element col-3">
      <img src={imageUrl} className="places__image" alt="home-img" />
      <div className={`places__home-description`}>
        <p className="places__label">{name}</p>
        <p className="homes__destination">
          {city}, {country}
        </p>
      </div>
    </Link>
  )
}

export default PlaceElement
