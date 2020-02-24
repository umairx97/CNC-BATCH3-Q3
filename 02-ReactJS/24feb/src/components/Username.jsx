import React, { Component } from 'react'

export class Username extends Component {
    
    render() {
        console.log("This is username")
        return (
            <div>
                Your user name is {this.props.username}
            </div>
        )
    }
}

export default Username


