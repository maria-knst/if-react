import React from 'react'

import Sprite from '../../images/svg/Sprite.svg'
import googlePlay from '../../images/svg/Google_Play.svg'

import './TopApps.css'

const TopApps = () => {
  return (
    <div className="top-apps">
      <img src={googlePlay} alt="google_play" className="google-play hovered" />

      <svg className="app-store hovered">
        <use href={`${Sprite}#App_Store`}></use>
      </svg>
    </div>
  )
}

export default TopApps
