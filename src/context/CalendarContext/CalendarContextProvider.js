import React, { useState } from 'react'
import { CalendarContext } from './CalendarContext'
import { DEFAULT_END_DATE, DEFAULT_START_DATE } from '../../utils/dates_work'

const CalendarContextProvider = ({ children }) => {
  const [period, setPeriod] = useState({
    startDate: {
      value: DEFAULT_START_DATE,
      isClicked: false,
    },
    endDate: {
      value: DEFAULT_END_DATE,
      isClicked: false,
    },
  })

  return (
    <CalendarContext.Provider value={{ period, setPeriod }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarContextProvider
