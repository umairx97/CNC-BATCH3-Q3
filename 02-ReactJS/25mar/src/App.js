import React from 'react'
import { connect } from 'react-redux'
import { userLoginSuccess } from './store/actions/authActions'
import { userAction } from './store/actions/userActions'

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(userLoginSuccess())
      this.props.dispatch(userAction(
        {
          user: { name: 'umair', age: 22 }
        }
      ))
    }, 2000);
  }

  render() {
    console.log(this.props)
    return (
      <h1>hello world</h1>
    )
  }
}
const mapStateToProps = state => {
  return {
    isloggedIn: state.auth.isLoggedIn,
    successMessage: state.auth.successMessage,
    user: state.userState.user
  }
}

export default connect(mapStateToProps)(App)