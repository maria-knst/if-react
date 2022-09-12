import React, { useState } from 'react'
import arrow from '../../images/svg/Arrow.svg'
import CalendarMonth from '../CalendarMonth/CalendarMonth'

import './Calendar.scss'

const Calendar = () => {
  const period = {
    start: false,
    end: false,
  }

  const madePeriod = (item) => {
    if (!period.start) {
      period.start = item.daysInMonth
    } else if (!period.end) {
      period.end = item.daysInMonth
    }
  }

  return (
    <div className="top__calendar">
      <img className="cal_arrow calendar_arrow1" src={arrow} alt="arrow" />
      <CalendarMonth id_="current" getClickedDay={madePeriod} />
      <CalendarMonth id_="next" getClickedDay={madePeriod} />
      <img className="cal_arrow calendar_arrow2" src={arrow} alt="arrow" />
    </div>
  )
}

export default Calendar
