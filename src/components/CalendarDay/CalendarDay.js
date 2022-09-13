import React, { useState } from 'react'

const CalendarDay = ({
  isToday,
  isPast,
  isNotCurrentMonth,
  dayItem,
  click,
}) => {
  const [clicked, setClicked] = useState(false)

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
      ${isToday && 'cal_today'} 
      ${isPast && 'cal_past-day'}
      ${isNotCurrentMonth && 'cal_not-current-month'}
      ${clicked && 'cal_clicked-day'}`}
      onClick={handleClick}
    >
      {dayItem.daysInMonth}
    </div>
  )
}

export default CalendarDay