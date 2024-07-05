import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            parentName:"parent"
        }
        this.greetParent= this.greetParent.bind(this)
    }  

    greetParent(name){
        alert(`Hello ${this.state.parentName} - ${name}`)
    }
  render() {
    return (
      <div>
        <Child greetParent={this.greetParent}/>
      </div>
    )
  }
}
