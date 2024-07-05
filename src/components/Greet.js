import React from 'react'

const Greet = ({name,lastName}) => {
  return (
    <div>
      <h3>{name}</h3>
    {lastName}
    </div>
  )
}

export default Greet
