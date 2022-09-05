import React, { useState } from 'react'
import Arrow from '../Arrow/Arrow'
import PlaceElement from '../PlaceElement/PlaceElement'
import { madeQueueFrom, decrement, increment } from '../../utils/utils'
import { VISIBLE_DIV_SIZE } from '../../utils/utils'
import './PlacesSliderContainer.css'

let sliderQueue = []

const PlacesSliderContainer = ({ elements }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(VISIBLE_DIV_SIZE)
  const [arrowPrev, setArrowPrev] = useState(false)
  const [arrowNext, setArrowNext] = useState(true)

  const clickPrev = (event) => {
    setArrowNext(true)
    event.preventDefault()
    const decr = decrement(start)
    if (decr !== false) {
      setStart(decr)
      setEnd(start + VISIBLE_DIV_SIZE - 1)
    } else {
      setArrowPrev(false)
    }
  }

  const clickNext = (event) => {
    setArrowPrev(true)
    event.preventDefault()
    const incr = increment(end, elements)
    if (incr !== false) {
      setEnd(incr)
      setStart(end - VISIBLE_DIV_SIZE + 1)
    } else {
      setArrowNext(false)
    }
  }

  sliderQueue = madeQueueFrom(elements, start, end)

  return (
    <div className="places__flex-container col-12">
      <Arrow id="places__arrow-prev" onclick={clickPrev} visible={arrowPrev} />
      {sliderQueue.map((item) => (
        <PlaceElement
          key={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          country={item.country}
          city={item.city}
        />
      ))}
      <Arrow id="places__arrow-next" onclick={clickNext} visible={arrowNext} />
    </div>
  )
}

export default PlacesSliderContainer
