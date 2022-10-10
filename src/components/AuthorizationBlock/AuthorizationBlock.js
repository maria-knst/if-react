import React from 'react'

import './AuthorizationBlock.scss'

import { autorizUsers, deepEqual } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { ACTION_SET_AUTHORIZE } from '../../redux/ducks/authorization/authoriz_actions'

const AuthorizationBlock = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const resObj = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    if (autorizUsers.find((item) => deepEqual(item, resObj))) {
      dispatch(ACTION_SET_AUTHORIZE(resObj))
    } else {
      alert('User is not found :(')
    }
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
            className="top-autoriz_input"
            required
          />
        </label>
        <label className="autoriz_label">
          Password:
          <input
            type="password"
            name="password"
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
