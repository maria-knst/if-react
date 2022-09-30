import React, { useState } from 'react'

import './AuthorizationBlock.scss'

const AuthorizationBlock = ({ setAutoriz }) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setAutoriz(true)
  }

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="autoris_block">
      <h3 className="autoris_title">Sign in</h3>
      <form onSubmit={handleSubmit} className="autoris_form">
        <label className="autoris_label">
          Email address:
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </label>
        <label className="autoris_label">
          Password:
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send me</button>
      </form>
    </div>
  )
}

export default AuthorizationBlock
