import React from 'react'
import './Heading.css'

const Heading = (props) => {
  return <h1 className="top-title">{props.children}</h1>
}

export default Heading
