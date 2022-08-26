import React from 'react'

const FormLabel = ({ labelText, ...props }) => {
  return <label {...props}>{labelText}</label>
}

export default FormLabel
