import React, { useState } from 'react'
import PeopleFilterComponent from '../PeopleFilterComponent/PeopleFilterComponent'

import './PeopleFilter.scss'

import { CHILD_YEARS } from '../../utils/utils'

const PeopleFilter = () => {
  const [childAgeCount, setChildAgeCount] = useState(0)

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

  return (
    <div className="top__people-filter" id="top__people-filter">
      <PeopleFilterComponent
        spanTitle="Adults"
        initialState={2}
        min={1}
        max={30}
      />
      <PeopleFilterComponent
        spanTitle="Children"
        initialState={0}
        min={0}
        max={10}
        setChildAgeCount={setChildAgeCount}
      />
      <PeopleFilterComponent
        spanTitle="Rooms"
        initialState={1}
        min={1}
        max={30}
      />
      {(childAgeCount > 0) && (
        <div
          className="top__filter-with-children"
          id="top__filter-with-children">
          <p>What is the age of the child you’re travelling with?</p>
          {getChildAgeElements(childAgeCount)}
        </div>
      )}
    </div>
  )
}

export default PeopleFilter
