import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'

const FormDivButton = (props) => {
  const [visible, setVisible] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }

  return (
    <div className={`${props.type} top__div-but`}>
      <button className="inner-but" onClick={handleClick}>
        {props.children}
      </button>
      {visible && (props.type === 'date' ? <Calendar /> : <PeopleFilter />)}
    </div>
  )
}

export default FormDivButton
