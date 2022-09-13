import React, { useState } from 'react'
import arrow from '../../images/svg/Arrow.svg'
import CalendarMonth from '../CalendarMonth/CalendarMonth'

import './Calendar.scss'

const period = {
  start: 'Tue 15 Sept',
  end: 'Sat 19 Sept',
}
const clickedPeriod = {
  start: false,
  end: false,
}

const Calendar = ({ setDataArguments }) => {
  const madePeriod = (item) => {
    if (!clickedPeriod.start && !clickedPeriod.end) {
      period.start = `${item.daysInMonth} ${item.month}`
      clickedPeriod.start = true
    } else if (clickedPeriod.start && !clickedPeriod.end) {
      period.end = `${item.daysInMonth} ${item.month}`
      clickedPeriod.end = true
    }
    setDataArguments(period)
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
