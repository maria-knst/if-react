import React, { useState } from 'react'

import './TopForm.css'
import Calendar from '../Calendar/Calendar'
import PeopleFilter from '../PeopleFilter/PeopleFilter'
import FormLabel from '../FormLabel/FormLabel'
import FormDivButton from '../FormDivButton/FormDivButton'

const TopForm = (props) => {
  const [destination, setDestination] = useState('New York')

  const handleSearch = (e) => {
    e.preventDefault()
    props.createRequest(destination)
  }

  return (
    <form className="top-search-frame col-12">
      <div className="top-search-titles">
        <FormLabel
          labelText="Your destination or hotel name"
          htmlFor="destination"
          className="search-destin"
        />
        <FormLabel labelText="Check-in — Check-out" className="search-check" />
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

        <FormDivButton type="date">
          <span id="start-date">Tue 15 Sept</span> —
          <span id="end-date">Sat 19 Sept</span>
        </FormDivButton>

        <FormDivButton type="people">
          <span id="adult-span">2</span> Adults —<span id="child-span">0</span>{' '}
          Children —<span id="room-span">1</span> Room
        </FormDivButton>

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
