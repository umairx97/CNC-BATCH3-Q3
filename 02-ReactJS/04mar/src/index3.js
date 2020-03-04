import React, { Component } from 'react'
import { render } from 'react-dom'


class App extends Component {

  render() {
    return (
      <div>
        Hello world {this.props.name}
      </div>
    )
  }
}




render(<App name={22} />, document.getElementById('root'))
