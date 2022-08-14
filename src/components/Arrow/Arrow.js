import React from 'react'
import arrow from '../../images/svg/Arrow.svg'
import './Arrow.css'

const Arrow = ({ id, onclick, visible, setVisible }) => {
    const arrowClasses = ['places__arrow']
    if (!visible) {
        arrowClasses.push('places__arrow_hidden')
    }

    return (
        <button className={arrowClasses.join(' ')} id={id} onClick={onclick}>
            <img src={arrow} alt="->" />
        </button>
    )
}

export default Arrow
