import React, {useState} from 'react'
import arrow from '../../images/svg/Arrow.svg'
import CalendarMonth from '../CalendarMonth/CalendarMonth'

import './Calendar.scss'

const Calendar = () => {

    const period = {
        start: false,
        end: false,
    }

    const madePeriod = (eTarget) =>{
        eTarget.classList.toggle('cal_clicked-day');
        if(!period.start){
            period.start = eTarget.innerText;
        }else if(!period.end){
            period.end = eTarget.innerText;
        }
    }

  return (
    <div className="top__calendar">
      <img className="cal_arrow calendar_arrow1" src={arrow} alt="arrow" />
      <CalendarMonth id_="current" getClickedDay={madePeriod} />
      <CalendarMonth id_="next" getClickedDay={madePeriod} />
      <img className="cal_arrow calendar_arrow2" src={arrow} alt="arrow" />
    </div>
  )
}

export default Calendar
