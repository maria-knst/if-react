import React, { useState, useContext } from 'react'
import {
  calendarMonth,
  calendarNextMonth,
  daysOfWeek,
  months,
  today,
} from '../../utils/dates_work'

import './CalendarMonth.scss'
import CalendarDay from '../CalendarDay/CalendarDay'
import { CalendarContext } from '../../context/CalendarContext/CalendarContext'

const CalendarMonth = ({ id_, getClickedDay }) => {
  const viewMonth = id_ === 'current' ? calendarMonth : calendarNextMonth
  const context_value = useContext(CalendarContext)

  const isPeriod = (matrixItem) => {
    const start_date = context_value.period.startDate;
    const end_date = context_value.period.endDate;
    if (!context_value.period || !start_date.isClicked
        || !end_date.isClicked) {
      return false
    }
    if (
      matrixItem.month === start_date.value.getMonth() &&
      matrixItem.month === end_date.value.getMonth() &&
      matrixItem.daysInMonth > start_date.value.getDate() &&
      matrixItem.daysInMonth < end_date.value.getDate()){
      return true
    }
    else if(matrixItem.month === start_date.value.getMonth() &&
            matrixItem.month !== end_date.value.getMonth() &&
            matrixItem.daysInMonth > start_date.value.getDate()){
      return true
    }
    else if(matrixItem.month !== start_date.value.getMonth() &&
        matrixItem.month === end_date.value.getMonth() &&
        matrixItem.daysInMonth < end_date.value.getDate()){
      return true
    }
  }

  const madeDay = (index, innerIndex, innerItem) => {
    if (innerItem.currentDay) {
      return (
        <CalendarDay
          dayItem={innerItem}
          isToday={true}
          click={getClickedDay}
          key={index * 7 + innerIndex}
          isIncludedInPeriod={isPeriod(innerItem)}
        />
      )
    } else {
      return !innerItem.isPast ? (
        <CalendarDay
          dayItem={innerItem}
          click={getClickedDay}
          key={index * 7 + innerIndex}
          isIncludedInPeriod={isPeriod(innerItem)}
        />
      ) : (
        <CalendarDay
          dayItem={innerItem}
          isPast={true}
          click={getClickedDay}
          key={index * 7 + innerIndex}
          isIncludedInPeriod={isPeriod(innerItem)}
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
                    key={index * 7 + innerIndex}
                    isIncludedInPeriod={isPeriod(innerItem)}
                  />
                )
              ) : (
                <CalendarDay
                  dayItem={innerItem}
                  isNotCurrentMonth={true}
                  click={getClickedDay}
                  key={index * 7 + innerIndex}
                  isIncludedInPeriod={isPeriod(innerItem)}
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
