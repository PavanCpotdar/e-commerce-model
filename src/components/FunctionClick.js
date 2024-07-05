import React from 'react'

export default function FunctionClick() {
    function clcikedButton(message){
        console.log(message)
    }
  return (
    <div>
        <h3>Function Click</h3>
      <button onClick={()=>clcikedButton("HI ckicked")}>Click</button>
    </div>
  )
}
