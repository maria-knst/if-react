import React, { useState } from 'react'
import {
  calendarMonth,
  calendarNextMonth,
  daysOfWeek,
  months,
  today,
} from '../../utils/dates_work'

import './CalendarMonth.scss'
import CalendarDay from '../CalendarDay/CalendarDay'

const CalendarMonth = ({ id_, getClickedDay }) => {
  const viewMonth = id_ === 'current' ? calendarMonth : calendarNextMonth

  const madeDay = (index, innerIndex, innerItem) => {
    if (innerItem.currentDay) {
      return (
        <CalendarDay
          dayItem={innerItem}
          isToday={true}
          click={getClickedDay}
          key={index + innerIndex}
        />
      )
    } else {
      return !innerItem.isPast ? (
        <CalendarDay
          dayItem={innerItem}
          click={getClickedDay}
          key={index + innerIndex}
        />
      ) : (
        <CalendarDay
          dayItem={innerItem}
          isPast={true}
          click={getClickedDay}
          key={index + innerIndex}
        />
      )
    }
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
                  <CalendarDay
                    dayItem={innerItem}
                    click={getClickedDay}
                    key={index + innerIndex}
                  />
                )
              ) : (
                <CalendarDay
                  dayItem={innerItem}
                  isNotCurrentMonth={true}
                  click={getClickedDay}
                  key={index + innerIndex}
                />
              ),
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default CalendarMonth
