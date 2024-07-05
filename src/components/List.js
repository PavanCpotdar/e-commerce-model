import React from 'react'

export default function List() {
    const names =["pavan","suresh","ravi"]


  return (
    <>
    <h1>List with maps</h1>
    {names.map((element,i)=><h5 key={i}>{i}-{element}</h5>)}
      
    </>
  )
}
