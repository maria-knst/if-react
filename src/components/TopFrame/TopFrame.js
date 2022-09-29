import React from 'react'
import './TopFrame.scss'
import Sprite from '../../images/svg/Sprite.svg'

const TopFrame = () => {
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
          <svg className="top-account hovered">
            <use href={`${Sprite}#AccountCircle`}></use>
          </svg>
          <div className="top__menu"></div>
        </div>
      </div>
    </div>
  )
}

export default TopFrame
