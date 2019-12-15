import React from 'react'

export default function Quote(props) {
  return (
    <p className="quote">
      {props.children}
    </p>
  )
}
