import React, { useState } from 'react'

import './AuthorizationBlock.scss'

import { autorizUsers, deepEqual } from "../../utils/utils";

const AuthorizationBlock = ({ setAutoriz }) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(autorizUsers.find((item) => deepEqual(item, value))){
      setAutoriz(true)
    }else {
      alert("User is not found :(")
    }

  }

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="autoriz_block">
      <h3 className="autoriz_title">Sign in</h3>
      <form onSubmit={handleSubmit} className="autoriz_form">
        <label className="autoriz_label">
          Email address:
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
            className="top-autoriz_input"
            required
          />
        </label>
        <label className="autoriz_label">
          Password:
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
            className="top-autoriz_input"
            minLength={4}
            required
          />
        </label>
        <button type="submit" className="top-autoriz-button">
          Send me
        </button>
      </form>
    </div>
  )
}

export default AuthorizationBlock
