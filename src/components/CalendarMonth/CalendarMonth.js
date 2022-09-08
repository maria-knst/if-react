import React, {useState} from 'react'
import {
  calendarMonth,
  calendarNextMonth,
  daysOfWeek,
  months,
  today,
} from '../../utils/dates_work'

import './CalendarMonth.scss'

const CalendarMonth = ({ id_ }) => {
  const [clicked, setClicked] = useState(false)
  const viewMonth = id_ === 'current' ? calendarMonth : calendarNextMonth

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
                <div
                  className={`cal_day cal_day-num cal_day-num-d ${clicked && 'cal_clicked-day'}`}
                  key={index + innerIndex}
                  onClick={(e) => {
                    console.log(e.target)}}
                >
                  {innerItem.daysInMonth}
                </div>
              ) : (
                <div
                  className={`cal_day cal_day-num cal_day-num-d cal_not-current-month ${clicked && 'cal_clicked-day'}`}
                  key={index + innerIndex}
                  onClick={(e) => {
                    console.log(e.target)}}
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
