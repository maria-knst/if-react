import React, { useState } from 'react'
import './TopFrame.scss'

import Sprite from '../../images/svg/Sprite.svg'
import Dropdown from '../Dropdown/Dropdown'
import {useDispatch, useSelector} from "react-redux";
import {ACTION_SET_UNAUTHORIZE} from "../../ducks/authorization/authoriz_actions";
import {isAuthorizeSelector} from "../../ducks/authorization/authoriz_selectors";

const TopFrame = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const dispatch = useDispatch();
  const isAuthorize = useSelector(isAuthorizeSelector);

  const handleClick = (e) => {
    e.preventDefault()
    setDropdownVisible(false)
    dispatch(ACTION_SET_UNAUTHORIZE());
  }

  const handleAccountClick = (e) => {
    e.preventDefault()
    if (isAuthorize) {
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
            className="top-option2 hovered"
          >
            Attractions
          </a>

          <svg className="top-night hovered">
            <use href={`${Sprite}#Night`}></use>
          </svg>
          <svg className="top-account hovered" onClick={handleAccountClick}>
            <use
              href={`${Sprite}#AccountCircle`}
              className={`${isAuthorize && 'top-account_autoriz'}`}
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
