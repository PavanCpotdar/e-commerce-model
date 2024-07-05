import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    increasCount(){
        // this.setState({counter:this.state.counter+1},()=>{
        //     console.log("Inside Call back",this.state.counter)
        // })
        this.setState((prev,props)=>({
            counter:prev.counter+1
        }))

        console.log("Outside Call back",this.state.counter)
    }

    increaseFiveTimes(){
        this.increasCount()
        this.increasCount()
        this.increasCount()
        this.increasCount()
        this.increasCount()
    }


  render() {
    return (
      <div>
        <h2>Count:= {this.state.counter}</h2>
        <button onClick={()=>this.increaseFiveTimes()}>Increase Five times</button>
      </div>
    )
  }
}

export default Counter
