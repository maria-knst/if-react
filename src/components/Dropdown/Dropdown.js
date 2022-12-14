import React from 'react'
import signOut from '../../images/svg/Vector-out.svg'

import './Dropdown.scss'

const Dropdown = ({ isVisible, handleClick }) => {
  return (
    <button
      className={`top-sing-out ${!isVisible && 'top-sing-out_hidden'}`}
      onClick={handleClick}
    >
      <img src={signOut} alt="out" />
      Sign out
    </button>
  )
}

export default Dropdown
