import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "pavan",
            comment: "Very good ",
            topic: "React"
        }
        // this.handleUserName=this.handleUserName.bind(this)
    }
    handleUserName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleComment = (e) => {
        this.setState({ comment: e.target.value })
    }
    handleTopic = (e) => {
        this.setState({ topic: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        alert(`${this.state.name} ${this.state.topic} ${this.state.comment}`)
    }
    
    
    render() {
        const {name,comment,topic} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input value={this.state.value} onChange={this.handleUserName} />
                    <div><label>Comment</label>
                        <textarea
                            value={this.state.value} onChange={this.handleComment}
                        />
                    </div>
                    <div><label>Topic</label>
                    <select  value={this.state.topic} onChange={this.handleTopic} >
                        <option value='react'> React</option>
                        <option value='js'> js</option>
                        <option value='vue'> Vue</option>

                    </select>
                    <br/>
                    <button type='submit' >Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}
