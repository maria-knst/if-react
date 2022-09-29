import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './PeopleFilterComponent.scss'

const useFilter = ({
  spanTitle,
  initialState,
  min,
  max,
  setChildAgeCount,
  getAmount,
}) => {
  const [amount, setAmount] = useState(initialState)
  const [plusDisabled, setPlusDisabled] = useState(false)
  const [minusDisabled, setMinusDisabled] = useState(false)

  useEffect(() => {
    if (amount + 1 > max) {
      setPlusDisabled(true)
    } else if (amount - 1 < min) {
      setMinusDisabled(true)
    }
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.innerText === '+') {
      if (amount < max) {
        setAmount(amount + 1)
        if (amount + 1 >= max) {
          setPlusDisabled(true)
          setMinusDisabled(false)
        } else {
          setPlusDisabled(false)
          setMinusDisabled(false)
        }
        if (spanTitle === 'Children') {
          setChildAgeCount(amount + 1)
        }
      }
      getAmount({ [spanTitle]: amount + 1 })
    } else {
      if (amount > min) {
        setAmount(amount - 1)
        if (amount - 1 <= min) {
          setMinusDisabled(true)
          setPlusDisabled(false)
        } else {
          setMinusDisabled(false)
          setPlusDisabled(false)
        }
        if (spanTitle === 'Children') {
          setChildAgeCount(amount - 1)
        }
        getAmount({ [spanTitle]: amount - 1 })
      }
    }
  }

  return {
    amount,
    plusDisabled,
    minusDisabled,
    handleClick,
  }
}

const PeopleFilterComponent = ({
  spanTitle,
  initialState,
  min,
  max,
  setChildAgeCount,
  getAmount,
}) => {
  const { amount, plusDisabled, minusDisabled, handleClick } = useFilter({
    spanTitle,
    initialState,
    min,
    max,
    setChildAgeCount,
    getAmount,
  })

  return (
    <div className="top__inner-filter">
      <span>{spanTitle}</span>
      <div className="top__filter-buttons">
        <button
          className={`filter_minus filter_inner-button ${
            minusDisabled && 'filter__button-disable'
          }`}
          onClick={handleClick}
        >
          -
        </button>
        <button className="filter_amount filter_inner-num-button">
          {amount}
        </button>
        <button
          className={`filter_plus filter_inner-button ${
            plusDisabled && 'filter__button-disable'
          }`}
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  )
}

PeopleFilterComponent.propTypes = {
  spanTitle: PropTypes.string.isRequired,
  initialState: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  setChildAgeCount: PropTypes.func,
}

export default PeopleFilterComponent
