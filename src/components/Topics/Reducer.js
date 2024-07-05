import React, { useReducer } from 'react'

export default function Reducer() {
    let init =0;
    const [state,dispatch] = useReducer(reducer,init);

    function reducer(state,action){
        // console.log(action)
        switch(action){
            case 'Inc':{
                return state+1
            }
            case 'Dec':{
                return state-1
            }
           
        }
    }

  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>dispatch('Inc')}>Click to increase</button>
      <button onClick={()=>dispatch('Dec')}>Click to Decrease</button>
    </div>
  )
}
