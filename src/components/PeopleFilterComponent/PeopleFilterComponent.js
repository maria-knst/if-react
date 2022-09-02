import React, { useState } from 'react'

import './PeopleFilterComponent.scss'

const PeopleFilterComponent = ({ spanTitle, initialState }) => {
  const [amount, setAmount] = useState(initialState)
    const handlePlusClick = (e) => {
      e.preventDefault();
      setAmount(amount + 1)
    }

    const handleMinusClick = (e) => {
        e.preventDefault()
        if(amount !== 0){
            setAmount(amount - 1)
        }

    }
  return (
    <div className="top__inner-filter">
      <span>{spanTitle}</span>
      <div className="top__filter-buttons">
        <button className="filter_minus filter_inner-button" onClick={handleMinusClick}>-</button>
        <button className="filter_amount filter_inner-num-button">
          {amount}
        </button>
        <button className="filter_plus filter_inner-button" onClick={handlePlusClick}>+</button>
      </div>
    </div>
  )
}

export default PeopleFilterComponent
