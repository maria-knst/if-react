import React, { useState, useContext } from 'react'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'

import './FormDivButton.scss'

import {CalendarContext} from "../../context/CalendarContext/CalendarContext";



const FormDivButton = ({ type }) => {
  const [visible, setVisible] = useState(false)
  const [peopleFilterArguments, setPeopleFilterArguments] = useState({
    Adults: 2,
    Children: 0,
    Rooms: 1,
  })

  const context_value = useContext(CalendarContext)

  const handleClick = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }

  const makeData = () => {
    if(context_value.period.isDefault){
      return 'Tue 15 Sep — Mon 24 Sep';
    }else {
      return (context_value.period.startDate.value.toDateString()
          + '—' +
          context_value.period.startDate.value.toDateString());
    }
  }

  return (
    <div className={`${type} top__div-but`}>
      <button className="inner-but" onClick={handleClick}>
        {type === 'people'
          ? Object.entries(peopleFilterArguments)
              .map((el) => {
                return `${el[0]} ${el[1]}`
              })
              .join(' — ')
          : makeData()}
      </button>
      {visible &&
        (type === 'date' ? (
          <Calendar />
        ) : (
          <PeopleFilter setPeopleFilterArguments={setPeopleFilterArguments} />
        ))}
    </div>
  )
}

export default FormDivButton
