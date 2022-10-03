import React, { useState } from 'react'
import './TopFrame.scss'

import Sprite from '../../images/svg/Sprite.svg'
import Dropdown from '../Dropdown/Dropdown'

const TopFrame = ({ isAutoriz, setAutoriz }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setDropdownVisible(false)
    setAutoriz(!isAutoriz)
  }

  const handleAccountClick = (e) => {
    e.preventDefault()
    if(isAutoriz){
      setDropdownVisible(!dropdownVisible)
    }
  }

  return (
    <div className="container col-12">
      <div className="top-frame">
        <svg className="top-logo">
          <use href={`${Sprite}#logo_vector`}></use>
        </svg>
        <div className="top-group col-4">
          <a
            href="src/components/TopFrame/TopFrame#"
            className="top-option1 hovered"
          >
            Stays
          </a>
          <a
            href="src/components/TopFrame/TopFrame#"
            className="top-option2 hovered">
            Attractions
          </a>

          <svg className="top-night hovered">
            <use href={`${Sprite}#Night`}></use>
          </svg>
          <svg className="top-account hovered" onClick={handleAccountClick}>
            <use
              href={`${Sprite}#AccountCircle`}
              className={`${isAutoriz && 'top-account_autoriz'}`}
            ></use>
          </svg>
          <Dropdown isVisible={dropdownVisible} handleClick={handleClick} />

          <div className="top__menu"></div>
        </div>
      </div>
    </div>
  )
}

export default TopFrame
