import AuthActions from '../actions/authActions'
import axios from 'axios';
import ActionTypes from '../actions/ActionTypes';

const SERVER_PATH = 'https://jsonplaceholder.typicode.com/posts'
class AuthMiddleware {
  static userLoginMiddleware = (data) => {
    return (dispatch) => {
      dispatch(AuthActions.userLogin())
      axios.get(SERVER_PATH).then(response => {
        console.log("SERVER RESPONSE", response.data)
        dispatch(AuthActions.userLoginSuccess({ user: response.data }))

      }).catch(err => {
        console.log(err)
        dispatch(AuthActions.userLoginFail({ success: false, errorMessage: err.message }))

      })
    }
  }

}

export default AuthMiddleware