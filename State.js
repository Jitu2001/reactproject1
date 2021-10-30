import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'jitu'
        }
    }
    render() {
        return (
            <div>
                <h1>
                {this.state.name}
            </h1>
            </div>
        )
    }

}