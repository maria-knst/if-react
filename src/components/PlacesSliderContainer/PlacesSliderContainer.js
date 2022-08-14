import React, { useState } from 'react'
import Arrow from '../Arrow/Arrow'
import PlaceElement from '../PlaceElement/PlaceElement'
import './PlacesSliderContainer.css'

const visibleDivSize = 4
let sliderQueue = []
const madeQueueFrom = (array, start, end) => {
    sliderQueue = array.slice(start, end)
}

const decrement = (index) => {
    if (index > 0) {
        console.log('decr')
        return --index
    }
    return false
}

const increment = (index, array) => {
    if (index < array.length) {
        console.log('inc')
        return ++index
    }
    return false
}

const PlacesSliderContainer = (props) => {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(visibleDivSize)
    const [arrowPrev, setArrowPrev] = useState(false)
    const [arrowNext, setArrowNext] = useState(true)

    function clickPrev(event) {
        setArrowNext(true)
        event.preventDefault()
        const decr = decrement(start)
        if (decr !== false) {
            setStart(decr)
            setEnd(start + visibleDivSize - 1)
        } else {
            setArrowPrev(false)
        }
    }
    function clickNext(event) {
        setArrowPrev(true)
        event.preventDefault()
        const incr = increment(end, props.elements)
        if (incr !== false) {
            setEnd(incr)
            setStart(end - visibleDivSize + 1)
        } else {
            setArrowNext(false)
        }
    }

    madeQueueFrom(props.elements, start, end)

    return (
        <div className="places__flex-container col-12" id={props.id}>
            <Arrow
                id="places__arrow-prev"
                onclick={clickPrev}
                visible={arrowPrev}
                setVisible={setArrowPrev}
            />
            {sliderQueue.map((item) => (
                <PlaceElement
                    key={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    country={item.country}
                    city={item.city}
                />
            ))}
            <Arrow
                id="places__arrow-next"
                onclick={clickNext}
                visible={arrowNext}
                setVisible={setArrowNext}
            />
        </div>
    )
}

export default PlacesSliderContainer
