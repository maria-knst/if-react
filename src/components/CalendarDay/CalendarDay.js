import React, { useState, useMemo } from 'react'

const CalendarDay = ({ dayItem, selectedDates, click }) => {
  const currentDay = useMemo(() => {
    const startDay = selectedDates.start?.valueOf()
    const endDay = selectedDates.end?.valueOf()

    const dateValue = new Date(
      2022,
      dayItem.month,
      dayItem.daysInMonth,
    ).valueOf()

    const dayNow = new Date().getDate()
    const monthNow = new Date().getMonth()

    return {
      isToday: dayItem.daysInMonth === dayNow && dayItem.month === monthNow,
      isPast: dayItem.daysInMonth < dayNow && dayItem.month === monthNow,
      isNotCurrentMonth: !dayItem.isCurrentMonth,
      isSelected: dateValue === startDay || dateValue === endDay,
      isChoosingDay:
        selectedDates.start &&
        selectedDates.end &&
        dateValue > startDay &&
        dateValue < endDay,
    }
  }, [selectedDates])

  // const [clicked, setClicked] = useState(false)
  // const context_value = useContext(CalendarContext)

  // const handleClick = (e) => {
  //   if (isPast || isNotCurrentMonth) {
  //     e.preventDefault()
  //   } else {
  //     setClicked(!clicked)
  //     click(dayItem)
  //   }
  // }
  //   ${isNotCurrentMonth && 'cal_not-current-month'}
  // ${isToday && 'cal_today'}

  return (
    <div
      className={`cal_day cal_day-num cal_day-num-d
      ${currentDay.isPast && 'cal_past-day'}
      ${currentDay.isChoosingDay && 'cal_choosing-day'}
      ${currentDay.isNotCurrentMonth && 'cal_not-current-month'}
      ${currentDay.isToday && 'cal_today'}
      ${currentDay.isSelected && 'cal_clicked-day'}`}
      onClick={() => click(dayItem)}
    >
      {dayItem.daysInMonth}
    </div>
  )
}

export default CalendarDay
