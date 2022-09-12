import React, { useState } from 'react'

import './TopForm.css'
import FormDivButton from '../FormDivButton/FormDivButton'

const TopForm = ({ createRequest }) => {
  const [destination, setDestination] = useState('New York')

  const handleSearch = (e) => {
    e.preventDefault()
    createRequest(destination)
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
