import React from 'react'

const CalendarMonth = ({ id_ }) => {
  return (
    <div className="calendar-month">
      <div className="calendar-wrapper calendar_current-month">
        <h4 className="cal_month-name" id={`cal_${id_}-month-name`}></h4>
        <div className="cal_grid-wrapper cal_grid-wrapper-d"></div>
      </div>
    </div>
  )
}

export default CalendarMonth
