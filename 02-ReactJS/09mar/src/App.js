import React, { Component } from "react";
import { connect } from "react-redux";
import CheckNumber from "./CheckNumber";

const incrementValue = newVal => {
  return {
    type: "INCREMENT",
    payload: {
      number: newVal + 1
    }
  };
};

const decrementValue = newVal => {
  return {
    type: "DECREMENT",
    payload: {
      number: newVal - 1
    }
  };
};
class App extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.dispatch(incrementValue(this.props.number))}
        >
          Increment value
        </button>
        <button
          onClick={() => this.props.dispatch(decrementValue(this.props.number))}
        >
          Decrement value
        </button>
        <CheckNumber />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
