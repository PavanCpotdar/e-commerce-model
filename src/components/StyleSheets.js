import React from 'react';
import './myStyle.css';
export default function StyleSheets(props) {
    let className = props.primary ? 'primary' : ""
  return (
    <div>
      <h3 className={className}>Style sheet</h3>
    </div>
  )
}
