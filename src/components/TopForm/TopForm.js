import React, { useState } from 'react'

import './TopForm.css'
import FormDivButton from '../FormDivButton/FormDivButton'
import { useDispatch, useSelector } from 'react-redux'
import { searchDataRequested } from '../../redux/ducks/search/search_actions'
import {
  adultsSelector,
  childrenSelector,
  roomsSelector,
} from '../../redux/ducks/travelers/travelers_selectors'
import {
  endDateSelector,
  startDateSelector,
} from '../../redux/ducks/travelTime/travelTime_selectors'

const TopForm = () => {
  const [destination, setDestination] = useState('New York')
  const dispatch = useDispatch()

  const adultsS = useSelector(adultsSelector)
  const childrenS = useSelector(childrenSelector)
  const roomsS = useSelector(roomsSelector)
  const startDateS = useSelector(startDateSelector)
  const endDateS = useSelector(endDateSelector)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(
      searchDataRequested({
        searchingString: destination,
        adults: adultsS,
        childrenAge: [childrenS],
        rooms: roomsS,
        startDate: new Date(),
        endDate: new Date(),
        //   startDate: startDateS,
        //   endDate: endDateS,
      }),
    )
    setDestination('')
  }

  return (
    <form className="top-search-frame col-12">
      <div className="top-search-titles">
        <label htmlFor="destination" className="search-destin">
          Your destination or hotel name
        </label>
        <label className="search-check">Check-in — Check-out</label>
      </div>
      <div className="top-search-inputs">
        <input
          type="text"
          id="destination"
          className="destination"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          required
        />
        <FormDivButton type="date" />
        <FormDivButton type="people" />

        <button
          onClick={handleSearch}
          className="top-search-button top-search-button_clicked"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default TopForm
