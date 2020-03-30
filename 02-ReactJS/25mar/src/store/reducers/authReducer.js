import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGIN } from '../actions/actionTypes'

const initialState = {
  name: 'umair',
  age: 22,
  isLoggedIn: false,
  loading: false,
  errorMessage: '',
  successMessage: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loading: true }

    case USER_LOGIN_SUCCESS:
      return { ...state, successMessage: 'You are logged in', loading: false }

    case USER_LOGIN_FAILED:
      return { ...state, erroMessage: 'Incorrect username or password', loading: false }

    default:
      return state
  }
}