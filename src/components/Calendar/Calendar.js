import React from 'react'
import arrow from '../../images/svg/Arrow.svg'
import CalendarMonth from '../CalendarMonth/CalendarMonth'

import './Calendar.scss'

const Calendar = () => {
  return (
    <div className="top__calendar">
      <img className="cal_arrow calendar_arrow1" src={arrow} alt="arrow" />
      <CalendarMonth id_="current" />
      <CalendarMonth id_="next" />
      <img className="cal_arrow calendar_arrow2" src={arrow} alt="arrow" />
    </div>
  )
}

export default Calendar
