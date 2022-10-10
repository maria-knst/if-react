import React from 'react'
import Sprite from '../../images/svg/Sprite.svg'

import './AdvantagesContainer.scss'
import Title from '../Title/Title'
import AdvantagesElement from '../AdvantagesElement/AdvantagesElement'

const AdvantagesContainer = () => {
  return (
    <div className="container col-12">
      <Title textContent="What do we offer" />

      <div className="flex-container">
        <AdvantagesElement
          icon={`${Sprite}#HeadsetMicOutlined`}
          title={'Support 24/7'}
        />
        <AdvantagesElement
          icon={`${Sprite}#ForumOutlined`}
          title={'Communicate directly'}
        />
        <AdvantagesElement
          icon={`${Sprite}#DevicesOutlined`}
          title={'Book online'}
        />
        <AdvantagesElement
          icon={`${Sprite}#ThumbUpAltOutlined`}
          title={'Real guest reviews'}
        />
      </div>
    </div>
  )
}

export default AdvantagesContainer
