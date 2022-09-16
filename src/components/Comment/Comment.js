import React from 'react'

import flag from '../../images/Flags/USA.png'

import './Comment.scss'

const Comment = () => {
  return (
    <div className="reviews__info-part">
      <div className="reviews__destination">
        <div className="reviews__hostel">
          <h6 className="reviews__hostel-name">King Kong Hostel</h6>
          <span className="reviews__hostel-location">
            Rotterdam, Netherlands
          </span>
        </div>

        <div className="reviews__score">
          <div className="reviews__score-num">8,9</div>
          <p className="reviews__score-p">2016 reviews</p>
        </div>
      </div>

      <div className="reviews__user">
        <svg className="reviews-account">
          <use href="../src/images/svg/Sprite.svg#AccountCircle"></use>
        </svg>
        <div className="reviews__user-info">
          <h6 className="user-name">Adam Smith</h6>
          <div className="user-location">
            <img
              className="reviews__flag"
              src={flag}
              alt="USA"
            />
            <p>USA</p>
          </div>
        </div>
      </div>

      <p className="reviews__review">
        Ive been in this hostel for a month and here is the best hostel of all
        Excellent management of excellent and ethical staff and bedrooms
        Bathrooms are always clean and excellent Most importantly, those who
        work here are kind and good-natured.
      </p>
    </div>
  )
}

export default Comment
