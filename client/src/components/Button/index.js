import React from 'react'
import './button.css'

function Button ({ type, text, action, color, onClick, disabled }) {
  return (
    <input
      type={type}
      value={text}
      className={`${action}-btn ${disabled ? '' : color}`}
      onClick={onClick}
      disabled={disabled}
    />
  )
}

export default Button
