import React from 'react'
import './Title.css'

const Title = ({ textContent }) => {
    return (
        <div className="title">
            <h2 className="title-text">{textContent}</h2>
        </div>
    )
}

export default Title
