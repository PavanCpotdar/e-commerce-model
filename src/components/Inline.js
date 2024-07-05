import React from 'react'

export default function Inline() {
    const heading = {
        fontSize : '20px',
        color: 'blue'
    }
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className='error'>Inline</h1>
      {/* <h1 className={styles.success}>Hi</h1>  */}
    </div>
  )
}
