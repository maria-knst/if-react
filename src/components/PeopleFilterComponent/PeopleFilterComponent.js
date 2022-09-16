import React, { useState } from 'react'

import './PeopleFilterComponent.scss'

const PeopleFilterComponent = ({ spanTitle, initialState }) => {
  const [amount, setAmount] = useState(initialState)
  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.innerText === '+') {
      setAmount(amount + 1)
    } else {
      if (amount !== 0) {
        setAmount(amount - 1)
      }
    }
  }

  return (
    <div className="top__inner-filter">
      <span>{spanTitle}</span>
      <div className="top__filter-buttons">
        <button
          className="filter_minus filter_inner-button"
          onClick={handleClick}
        >
          -
        </button>
        <button className="filter_amount filter_inner-num-button">
          {amount}
        </button>
        <button
          className="filter_plus filter_inner-button"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default PeopleFilterComponent
