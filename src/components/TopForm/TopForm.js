import React from 'react'
import './TopForm.css'

const TopForm = () => {
  return (
    <form className="top-search-frame col-12">
      <div className="top-search-titles">
        <label htmlFor="destination" className="search-destin">
          Your destination or hotel name
        </label>
        <label htmlFor="date" className="search-check">
          Check-in — Check-out
        </label>
      </div>
      <div className="top-search-inputs">
        <input
          type="text"
          id="destination"
          className="destination"
          placeholder="New York"
          value="New York"
          required
        />

        <div className="date top__div-but" id="date">
          <button id="date-field" className="inner-but">
            <span id="start-date">Tue 15 Sept</span> —
            <span id="end-date">Sat 19 Sept</span>
          </button>
          <div id="top__calendar" className="top__calendar disable">
            <img
              className="cal_arrow calendar_arrow1"
              src="../../images/svg/Arrow.svg"
              alt="arrow"
            />
            <div className="calendar-month">
              <div className="calendar-wrapper calendar_current-month">
                <h4 className="cal_month-name" id="cal_current-month-name"></h4>
                <div className="cal_grid-wrapper cal_grid-wrapper-d"></div>
              </div>
            </div>
            <div className="calendar-month">
              <div className="calendar-wrapper calendar_next-month">
                <h4 className="cal_month-name" id="cal_next-month-name"></h4>
                <div className="cal_grid-wrapper cal_grid-wrapper-d"></div>
              </div>
            </div>
            <img
              className="cal_arrow calendar_arrow2"
              src="../../images/svg/Arrow.svg"
              alt="arrow"
            />
          </div>
        </div>

        <div className="people top__div-but">
          <button id="amount-field" className="inner-but">
            <span id="adult-span">2</span> Adults —
            <span id="child-span">0</span> Children —
            <span id="room-span">1</span> Room
          </button>

          <div className="top__people-filter disable" id="top__people-filter">
            <div className="top__inner-filter">
              <span>Adults</span>
              <div className="top__filter-buttons">
                <button
                  id="adult-minus"
                  className="filter_minus filter_inner-button"
                >
                  -
                </button>
                <button
                  id="adult-amount"
                  className="filter_amount filter_inner-num-button"
                >
                  2
                </button>
                <button
                  id="adult-plus"
                  className="filter_plus filter_inner-button"
                >
                  +
                </button>
              </div>
            </div>
            <div className="top__inner-filter">
              <span>Children</span>
              <div className="top__filter-buttons">
                <button
                  id="child-minus"
                  className="filter_minus filter_inner-button"
                >
                  -
                </button>
                <button
                  id="child-amount"
                  className="filter_amount filter_inner-num-button"
                >
                  0
                </button>
                <button
                  id="child-plus"
                  className="filter_plus filter_inner-button"
                >
                  +
                </button>
              </div>
            </div>
            <div className="top__inner-filter">
              <span>Rooms</span>
              <div className="top__filter-buttons">
                <button
                  id="room-minus"
                  className="filter_minus filter_inner-button"
                >
                  -
                </button>
                <button
                  id="room-amount"
                  className="filter_amount filter_inner-num-button"
                >
                  1
                </button>
                <button
                  id="room-plus"
                  className="filter_plus filter_inner-button"
                >
                  +
                </button>
              </div>
            </div>
            <div
              className="top__filter-with-children temporarily-hidden"
              id="top__filter-with-children"
            ></div>
          </div>
        </div>
        <button className="top-search-button top-search-button_clicked">
          Search
        </button>
      </div>
    </form>
  )
}

export default TopForm
