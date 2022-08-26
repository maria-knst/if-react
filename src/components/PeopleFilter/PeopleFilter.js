import React from 'react'
import PeopleFilterComponent from '../PeopleFilterComponent/PeopleFilterComponent'

const PeopleFilter = () => {
  return (
    <div className="top__people-filter" id="top__people-filter">
      <PeopleFilterComponent spanTitle="Adults" initialState={2} />
      <PeopleFilterComponent spanTitle="Children" initialState={0} />
      <PeopleFilterComponent spanTitle="Rooms" initialState={1} />
      <div
        className="top__filter-with-children temporarily-hidden"
        id="top__filter-with-children"
      ></div>
    </div>
  )
}

export default PeopleFilter
