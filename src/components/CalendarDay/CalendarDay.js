import React, { useState, useContext } from 'react'
import { CalendarContext } from '../../context/CalendarContext/CalendarContext'

const CalendarDay = ({
  isToday,
  isPast,
  isNotCurrentMonth,
  isIncludedInPeriod,
  dayItem,
  click,
}) => {
  const [clicked, setClicked] = useState(false)
  const context_value = useContext(CalendarContext)

  const handleClick = (e) => {
    if (isPast || isNotCurrentMonth) {
      e.preventDefault()
    } else {
      setClicked(!clicked)
      click(dayItem)
    }
  }

  return (
    <div
      className={`cal_day cal_day-num cal_day-num-d
      ${isPast && 'cal_past-day'}
      ${isNotCurrentMonth && 'cal_not-current-month'}
      ${isIncludedInPeriod && 'cal_choosing-day'}
      ${isToday && 'cal_today'} 
      ${clicked && 'cal_clicked-day'}`}
      onClick={handleClick}
    >
      {dayItem.daysInMonth}
    </div>
  )
}

export default CalendarDay
