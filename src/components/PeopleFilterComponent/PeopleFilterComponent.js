import React from 'react'

const PeopleFilterComponent = ({ spanTitle, initialState }) => {
  return (
    <div className="top__inner-filter">
      <span>{spanTitle}</span>
      <div className="top__filter-buttons">
        <button className="filter_minus filter_inner-button">-</button>
        <button className="filter_amount filter_inner-num-button">
          {initialState}
        </button>
        <button className="filter_plus filter_inner-button">+</button>
      </div>
    </div>
  )
}

export default PeopleFilterComponent
