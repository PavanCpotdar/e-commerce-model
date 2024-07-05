import React from 'react'

export default function Child(props) {
  return (
    <div>
      <button onClick={()=>props.greetParent("child")}>Click To greet parent</button>
    </div>
  )
}
