import React, { useState, useContext } from 'react'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'

import './FormDivButton.scss'

import { CalendarContext } from '../../context/CalendarContext/CalendarContext'

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
    const start_date = context_value.period.startDate;
    const end_date = context_value.period.endDate;
    if (!start_date.isClicked && !end_date.isClicked
        || !start_date.isClicked && end_date.isClicked) {
      return 'Tue 15 Sep — Mon 24 Sep'
    }else if(start_date.isClicked && !end_date.isClicked){
      return `${start_date.value.toDateString()} — Mon 24 Sep'`
    }
    else {
      return (
          start_date.value.toDateString() + '—' +
          end_date.value.toDateString()
      )
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
