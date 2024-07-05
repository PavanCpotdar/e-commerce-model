import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state={
            message:"Welcome Visitor"
        }
    }
     change() {
        this.setState({'message':'Thank you for subscribing'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.message} := message</h1>
        <button onClick={()=>this.change()}>Click change messahe</button>
      </div>
    )
  }
}
