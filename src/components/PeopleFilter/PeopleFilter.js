import React, { useState } from 'react'
import PeopleFilterComponent from '../PeopleFilterComponent/PeopleFilterComponent'

import './PeopleFilter.scss'

import { CHILD_YEARS } from '../../utils/utils'

let totalAmount = {
  Adults: 2,
  Children: 0,
  Rooms: 1,
}

const PeopleFilter = ({ setPeopleFilterArguments }) => {
  const [childAgeCount, setChildAgeCount] = useState(0)
    // const [totalAmount, setTotalAmount] = useState({
    //     Adults: 2,
    //     Children: 0,
    //     Rooms: 1,
    // })

  const getChildAgeElements = (length) => {
    const content = []
    for (let i = 0; i < length; i++) {
      content.push(
        <select id={`child${i}`} className="top__child-years" key={i}>
          {CHILD_YEARS.map((item) => (
            <option value={item} key={item}>{`${item} years`}</option>
          ))}
        </select>,
      )
    }
    return content
  }

  const getTotalAmount = (object) => {
    totalAmount = { ...totalAmount, ...object }
    setPeopleFilterArguments(totalAmount)
  }

  return (
    <div className="top__people-filter" id="top__people-filter">
      <PeopleFilterComponent
        spanTitle="Adults"
        initialState={totalAmount.Adults}
        min={1}
        max={30}
        getAmount={getTotalAmount}
      />
      <PeopleFilterComponent
        spanTitle="Children"
        initialState={totalAmount.Children}
        min={0}
        max={10}
        setChildAgeCount={setChildAgeCount}
        getAmount={getTotalAmount}
      />
      <PeopleFilterComponent
        spanTitle="Rooms"
        initialState={totalAmount.Rooms}
        min={1}
        max={30}
        getAmount={getTotalAmount}
      />
      {childAgeCount > 0 && (
        <div
          className="top__filter-with-children"
          id="top__filter-with-children"
        >
          <p>What is the age of the child you’re travelling with?</p>
          {getChildAgeElements(childAgeCount)}
        </div>
      )}
    </div>
  )
}

export default PeopleFilter
