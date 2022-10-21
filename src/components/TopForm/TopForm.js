import React, { useState } from 'react'

import './TopForm.css'
import FormDivButton from '../FormDivButton/FormDivButton'
import { useDispatch, useSelector } from 'react-redux'
import { searchDataRequested } from '../../redux/ducks/search/search_actions'
import {
  childrenSelector,
} from '../../redux/ducks/travelers/travelers_selectors'

const TopForm = () => {
  const [destination, setDestination] = useState('New York')
  const [date, setDate] = useState({
    start: new Date(),
    end: new Date(),
  })
  const [peopleAmount, setPeopleAmount] = useState({
      Adults: 2,
      Children: 0,
      Rooms: 1,
  })
  const dispatch = useDispatch()

  const childrenS = useSelector(childrenSelector)

  const handleSearch = (e) => {
    e.preventDefault()
      console.log(date)
    dispatch(
      searchDataRequested({
        searchingString: destination,
        adults: peopleAmount.Adults,
        childrenAge: [childrenS],
        rooms: peopleAmount.Rooms,
        ...date,
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
        <FormDivButton type="date" setDate={setDate} />
        <FormDivButton type="people" setPeopleAmount={setPeopleAmount} />

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
