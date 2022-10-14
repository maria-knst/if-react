import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'

import './FormDivButton.scss'

const FormDivButton = ({ type }) => {
  const [visible, setVisible] = useState(false)
  const [peopleFilterArguments, setPeopleFilterArguments] = useState({
    Adults: 2,
    Children: 0,
    Rooms: 1,
  })

  const [selectedDates, setSelectedDates] = useState({
    start: null,
    end: null,
  })

  const handleClick = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }

  const makeData = () => {
    if (!selectedDates.start && !selectedDates.end) {
      return 'Mon 11 Sep — Sun 19 Sep'
    } else if (selectedDates.start && !selectedDates.end) {
      return `${selectedDates.start.toDateString()} — Sun 19 Sep`
    } else if (selectedDates.start === null && selectedDates.end) {
      return `Mon 11 Sep — ${selectedDates.end.toDateString()}`
    } else {
      return (
          selectedDates.start.toDateString() +
          '—' +
          selectedDates.end.toDateString()
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
                <Calendar
                    selectedDates={selectedDates}
                    setSelectedDates={setSelectedDates}
                />
            ) : (
                <PeopleFilter setPeopleFilterArguments={setPeopleFilterArguments} />
            ))}
      </div>
  )
}

export default FormDivButton