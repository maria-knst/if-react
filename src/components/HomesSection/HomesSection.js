import React, { useEffect, useState } from 'react'

import Title from '../Title/Title'
import PlacesSliderContainer from '../PlacesSliderContainer/PlacesSliderContainer'

import './HomesSection.css'
import { BASE_PATH } from '../../utils/utils'

const HomesSection = () => {
  const [arrayOfHomes, setArrayOfHomes] = useState([])

  const fetchHomes = async () => {
    const response = await fetch(BASE_PATH + '/popular')
    const result = await response.json()
    setArrayOfHomes(result)
  }

  useEffect(() => {
    fetchHomes()
  }, [])

  return (
    <section className="homes">
      <div className="container homes__container">
        <Title textContent="Homes guests loves" />
        <PlacesSliderContainer elements={arrayOfHomes} />
      </div>
    </section>
  )
}

export default HomesSection
