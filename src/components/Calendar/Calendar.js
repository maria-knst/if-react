import React, { useContext } from 'react'
import arrow from '../../images/svg/Arrow.svg'

import CalendarMonth from '../CalendarMonth/CalendarMonth'

import './Calendar.scss'

const Calendar = ({ selectedDates, setSelectedDates }) => {
  return (
    <div className="top__calendar">
      <img className="cal_arrow calendar_arrow1" src={arrow} alt="arrow" />
      <CalendarMonth
        id_="current"
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
      <CalendarMonth
        id_="next"
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
      <img className="cal_arrow calendar_arrow2" src={arrow} alt="arrow" />
    </div>
  )
}

export default Calendar
