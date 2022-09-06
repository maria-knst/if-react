import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'

import './FormDivButton.scss'
import PeopleFilterComponent from "../PeopleFilterComponent/PeopleFilterComponent";

const FormDivButton = ({type, children}) => {
  const [visible, setVisible] = useState(false)
    const [peopleFilterArguments, setPeopleFilterArguments] = useState({
      adults: 2,
      children: 0,
      rooms: 1,
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
          {(type === 'people') ?
              (peopleFilterArguments.adults + 'Adults — ' + peopleFilterArguments.children + 'Children — ' + peopleFilterArguments.rooms + ' Room ')
          :
              (dataArguments.start + '—' + dataArguments.end)

          }
      </button>
      {visible && (type === 'date' ?
          <Calendar />
          :
          <PeopleFilter setPeopleFilterArguments={setPeopleFilterArguments} />
      )}
    </div>
  )
}

export default FormDivButton
