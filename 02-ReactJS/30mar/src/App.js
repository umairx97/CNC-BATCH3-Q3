import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import AuthMiddleware from './Store/middlewares/authMiddleware'


class App extends Component {

  componentDidMount() {
    console.log("PROPS OBJECT", this.props)
    // this.props.dispatch(AuthMiddleware.userLoginMiddleware())
    this.props.userLogin()
  }

  render() {
    return (
      <div>hello world</div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
  userLogin: () => dispatch(AuthMiddleware.userLoginMiddleware())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
