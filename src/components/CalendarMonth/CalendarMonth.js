import React, {useState} from 'react'
import {
  calendarMonth,
  calendarNextMonth,
  daysOfWeek,
  months,
  today,
} from '../../utils/dates_work'

import './CalendarMonth.scss'

const CalendarMonth = ({ id_, getClickedDay }) => {
  const viewMonth = id_ === 'current' ? calendarMonth : calendarNextMonth

  const madeDay = (index, innerIndex, innerItem) => {
    if (innerItem.currentDay) {
      return (
        <div
          className="cal_day cal_day-num cal_day-num-d cal_today"
          key={index + innerIndex}
          onClick={handleClick.bind(this, innerItem)}
        >
          {innerItem.daysInMonth}
        </div>
      )
    } else {
      return !innerItem.isPast ? (
        <div
          className="cal_day cal_day-num cal_day-num-d"
          key={index + innerIndex}
          onClick={handleClick.bind(this, innerItem)}
        >
          {innerItem.daysInMonth}
        </div>
      ) : (
        <div
          className="cal_day cal_day-num cal_day-num-d cal_past-day"
          key={index + innerIndex}
          onClick={(event) => event.preventDefault()}
        >
          {innerItem.daysInMonth}
        </div>
      )
    }
  }

  const madeNextMonthDay = (index, innerIndex, innerItem) => {
    return (
      <div
        className="cal_day cal_day-num cal_day-num-d"
        key={index + innerIndex}
        onClick={handleClick.bind(this, innerItem)}
      >
        {innerItem.daysInMonth}
      </div>
    )
  }

  const handleClick = (item, e) => {
    e.target.classList.toggle('cal_clicked-day')
    getClickedDay(item)
  }

  return (
    <div className="calendar-month">
      <div className="calendar-wrapper calendar_current-month">
        <h4 className="cal_month-name" id={`cal_${id_}-month-name`}>
          {id_ === 'current'
            ? months[today.getMonth()]
            : months[today.getMonth() + 1]}
        </h4>
        <div className="cal_grid-wrapper cal_grid-wrapper-d">
          {daysOfWeek.map((item, index) => (
            <div className="cal_day cal_day-of-week" key={index}>
              {item}
            </div>
          ))}

          {viewMonth.map((item, index) =>
            item.map((innerItem, innerIndex) =>
              innerItem.isCurrentMonth ? (
                id_ === 'current' ? (
                  madeDay(index, innerIndex, innerItem)
                ) : (
                  madeNextMonthDay(index, innerIndex, innerItem)
                )
              ) : (
                <div
                  className="cal_day cal_day-num cal_day-num-d cal_not-current-month"
                  key={index + innerIndex}
                  onClick={handleClick.bind(this, innerItem)}
                >
                  {innerItem.daysInMonth}
                </div>
              ),
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default CalendarMonth
