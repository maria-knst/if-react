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

const CalendarMonth = ({ id_, selectedDates, setSelectedDates }) => {
  const viewMonth = id_ === 'current' ? calendarMonth : calendarNextMonth


  const handleSelectedDay = (day) => {
    const clickedDay = new Date(2022, day.month, day.daysInMonth)
    setSelectedDates( (prevState) => {
      if(prevState.start && !prevState.end){
        if(prevState.start.getMonth() === clickedDay.getMonth() &&
           prevState.start.getDay() > clickedDay.getDay() ||
           prevState.start.getMonth() > clickedDay.getMonth()){ //If start greater than end or
          return { end: prevState.start, start: clickedDay }
        }
        else {
          return { ...prevState, end:clickedDay }
        }
      }
      else {
        if(prevState.start && prevState.end){
          return { start: clickedDay, end: null }
        }else {
          return { ...prevState, start:clickedDay }
        }
      }
    })
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
            item.map((innerItem, innerIndex) => (
                <CalendarDay dayItem={innerItem}
              selectedDates={selectedDates}
              click={handleSelectedDay}
              key={index*7 + innerIndex} />
                )),
          )}
        </div>
      </div>
    </div>
  )
}

export default CalendarMonth
