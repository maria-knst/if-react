import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'

import './FormDivButton.scss'

const FormDivButton = ({type, children}) => {
  const [visible, setVisible] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }

  return (
    <div className={`${type} top__div-but`}>
      <button className="inner-but" onClick={handleClick}>
        {children}
      </button>
      {visible && (type === 'date' ? <Calendar /> : <PeopleFilter />)}
    </div>
  )
}

export default FormDivButton
