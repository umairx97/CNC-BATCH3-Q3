import React, { Component } from 'react'
import './Hello.css'

class HelloComponent extends Component {
    render() {
        return <div>
            <h1>Hello {this.props.username}</h1>
        </div>
    }
}

export default HelloComponent