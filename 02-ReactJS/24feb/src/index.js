import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./pages/Home";
import Username from "./components/Username";

class App extends Component {
  state = {
    username: "Umair",
    password: ""
  }

  handleChange = ({ target: { name, value } }, val) => {
    console.log(val)
    this.setState({ [name]: value })
  }


  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          type="text" value={username} onChange={(event) => this.handleChange(event)} name="username"
        />
        <input
          type="text" value={password} onChange={this.handleChange} name="password"
        />
        <Home username={this.state.username} password={this.state.password} />
      </div>
    );
  }
}

render(<App username="Umair" />, document.getElementById("root"));
