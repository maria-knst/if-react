import React, { useContext } from 'react'
import arrow from '../../images/svg/Arrow.svg'

import CalendarMonth from '../CalendarMonth/CalendarMonth'
import { CalendarContext } from '../../context/CalendarContext/CalendarContext'

import './Calendar.scss'

const usePeriod = () => {
  const { period, setPeriod } = useContext(CalendarContext)

  const madePeriod = (item) => {
    const returningObject = {
      value: new Date(2022, item.month, item.daysInMonth),
      isClicked: true,
    }
    if (!period.startDate.isClicked && !period.endDate.isClicked) {
      setPeriod({ ...period, startDate: returningObject })
    } else if (period.startDate.isClicked && !period.endDate.isClicked) {
      if (
        (period.startDate.value.getMonth() === item.month &&
          period.startDate.value.getDate() > item.daysInMonth) || //If second date greater than first (month the same) - change them
        period.startDate.value.getMonth() > item.month // If month of first greater than month of second - change them
      ) {
        setPeriod({
          endDate: {
            value: period.startDate.value,
            isClicked: period.startDate.isClicked,
          },
          startDate: returningObject,
        })
      } else {
        setPeriod({ ...period, endDate: returningObject })
      }
    }else if(!period.startDate.isClicked && period.endDate.isClicked){
      if (
          (period.endDate.value.getMonth() === item.month &&
              period.endDate.value.getDate() < item.daysInMonth) || //If second date less than first (month the same) - change them
          period.endDate.value.getMonth() < item.month // If month of first less than month of second - change them
      ) {
        setPeriod({
          startDate: {
            value: period.endDate.value,
            isClicked: period.endDate.isClicked,
          },
          endDate: returningObject,
        })
      } else {
        setPeriod({ ...period, startDate: returningObject })
      }
    } else {
      if (item.daysInMonth === period.startDate.value.getDate() &&
        item.month === period.startDate.value.getMonth()
      ) {
        setPeriod({
          ...period,
          startDate: {
            value: new Date(2022, item.month, item.daysInMonth),
            isClicked: false,
          },
        })
      } else if (item.daysInMonth === period.endDate.value.getDate() &&
        item.month === period.endDate.value.getMonth()
      ) {
        setPeriod({
          ...period,
          endDate: {
            value: new Date(2022, item.month, item.daysInMonth),
            isClicked: false,
          },
        })
      } else {
        setPeriod({
          startDate: {
            value: new Date(2022, item.month, item.daysInMonth),
            isClicked: false,
          },
          endDate: {
            value: new Date(2022, item.month, item.daysInMonth),
            isClicked: false,
          },
        })
      }
    }
    console.log(period)
  }

  return madePeriod
}

const Calendar = () => {
  const madePeriod = usePeriod()

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
