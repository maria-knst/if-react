import React from 'react'
import arrow from '../../images/svg/Arrow.svg'

const Arrow = ({ id, onclick, visible }) => {

  return (
    <button className={`places__arrow ${!visible && 'places__arrow_hidden'}`} id={id} onClick={onclick}>
      <img src={arrow} alt="->" />
    </button>
  )
}

export default Arrow
