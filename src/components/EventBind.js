import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Hi World"
        }

        // Best Approach 3
    //    this.clickHandler= this.clickHandler.bind(this)
    }

    // Approach 4
    // clickHandler (){
    //     console.log("this",this)
    //     this.setState({message:"good by"})
    // }

    clickHandler=()=>{
        this.setState({
            message:"GoodBY"
        })
    }
  render() {
    return (
      <div>
        <h5>{this.state.message}</h5>
       {/* Approach 1*/}
        {/* <button onClick={this.clickHandler.bind(this)}
        >click bind</button> */}

        {/* Approach 2*/}
        {/* <button onClick={()=>this.clickHandler()}>click bind</button> */}

        {/* Approach 3*/}
        <button onClick={this.clickHandler}>click bind</button>

        
      </div>
    )
  }
}
