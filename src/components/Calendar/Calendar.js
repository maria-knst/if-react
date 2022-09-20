import React, { useContext } from 'react'
import arrow from '../../images/svg/Arrow.svg'

import CalendarMonth from '../CalendarMonth/CalendarMonth'
import { CalendarContext } from '../../context/CalendarContext/CalendarContext'

import './Calendar.scss'

const Calendar = () => {
  const value = useContext(CalendarContext)

  const madePeriod = (item) => {
    if (!value.period.startDate.isClicked && !value.period.endDate.isClicked) {
      value.setPeriod({
        ...value.period,
        startDate: {
          value: new Date(2022, item.month, item.daysInMonth),
          isClicked: true,
        },
      })
    } else if (value.period.startDate.isClicked &&
              !value.period.endDate.isClicked) {
      value.setPeriod({
        ...value.period,
        endDate: {
          value: new Date(2022, item.month, item.daysInMonth),
          isClicked: true,
        },
        isDefault: false,
      })
    }
    else{
      value.setPeriod({
        ...value.period,
        isDefault: true,
      })
    }
    console.log(value.period);
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
