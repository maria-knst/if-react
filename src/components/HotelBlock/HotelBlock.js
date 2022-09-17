import React, { useEffect, useState } from 'react'

import './HotelBlock.scss'
import { useLocation } from 'react-router-dom'
import { BASE_PATH, getIdFromURL } from '../../utils/utils'
import Comment from '../Comment/Comment'
import Arrow from '../Arrow/Arrow'

const initialHotel = {
  id: '4024535d-a498-4274-b7cb-f01ada962971',
  name: 'Hotel',
  city: 'Minsk',
  country: 'Belarus',
  imageUrl:
    'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
}

const HotelBlock = () => {
  const location = useLocation()
  const elementID = getIdFromURL(location.pathname)
  const [hotelElement, setHotelElement] = useState(initialHotel)

  const getElementByID = async (id) => {
    const request = await fetch(BASE_PATH + `/${id}`)
    const result = await request.json()
    setHotelElement(result)
  }

  useEffect(() => {
    getElementByID(elementID)
  }, [])

  console.log(hotelElement)
  return (
    <section className="hotel_block">
      <div className="hotel_description container col-12">
        <div className="hotel_image-container">
          <img
            className="hotel_image"
            src={hotelElement.imageUrl}
            alt="Image"
          />
        </div>
        <div className="hotel_info-container">
          <div>
            <h2>{hotelElement.name}</h2>
            <p>
              Any cool description you want. Description that describes all the
              advantages or disadvantages of an object. Any cool description you
              want. Description that describes all the advantages or
              disadvantages of an object. Any cool description you want.
              Description that describes all the advantages or disadvantages of
              an object. Any cool description you want. Description that
              describes all the advantages or disadvantages of an object.
            </p>
          </div>
          <p className="hotel_destination">
            Destination:{' '}
            <span>{`${hotelElement.city}, ${hotelElement.country}`}</span>
          </p>
        </div>
      </div>
      <div className="hotel_comments container col-12">
        <div className="comment__flex-container">
          <Arrow id="places__arrow-prev" visible={true} />
          <Comment
            hotelName={hotelElement.name}
            hotelDestination={`${hotelElement.city}, ${hotelElement.country}`}
          />
          <Comment
              hotelName={hotelElement.name}
              hotelDestination={`${hotelElement.city}, ${hotelElement.country}`}
          />
          <Comment
              hotelName={hotelElement.name}
              hotelDestination={`${hotelElement.city}, ${hotelElement.country}`}
          />
          <Arrow id="places__arrow-next" visible={true} />
        </div>
      </div>
    </section>
  )
}

export default HotelBlock
