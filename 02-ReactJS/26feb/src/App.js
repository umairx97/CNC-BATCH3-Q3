import React from 'react'

class App extends React.Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMessage: "",
    successMessage: ""
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state
    if (username.toLowerCase() === "umair" && password.toLowerCase() === "1234") {
      this.setState({ successMessage: "You are logged in", isError: false })
    } else {
      this.setState({ isError: true, errorMessage: "Incorrect username or password" })
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={(event) => this.setState({ username: event.target.value })}
          placeholder="Enter username"
        />
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
        {this.state.isError && <p style={{ color: 'red' }}>{this.state.errorMessage}</p>}
        {!this.state.isError && <p style={{ color: 'green' }}>{this.state.successMessage}</p>}

      </form>
    )
  }
}
export default App
