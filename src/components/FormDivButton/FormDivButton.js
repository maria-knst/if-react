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
  const [dataArguments, setDataArguments] = useState({
    start: 'Tue 15 Sept',
    end: 'Sat 19 Sept',
  })

  const handleClick = (e) => {
    e.preventDefault()
    setVisible(!visible)
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
          : dataArguments.start + '—' + dataArguments.end}
      </button>
      {visible &&
        (type === 'date' ? (
          <Calendar setDataArguments={setDataArguments} />
        ) : (
          <PeopleFilter setPeopleFilterArguments={setPeopleFilterArguments} />
        ))}
    </div>
  )
}

export default FormDivButton
