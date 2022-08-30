import React from 'react'

import googlePlay from '../../images/svg/Google_Play.svg'
import appStore from '../../images/svg/App_Store.svg'

import './TopApps.css'

const TopApps = () => {
  return (
    <div className="top-apps">
      <img src={googlePlay} alt="google_play" className="google-play hovered" />
      <img src={appStore} alt="app_store" className="app-store hovered" />
    </div>
  )
}

export default TopApps
