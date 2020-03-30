import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from './actionTypes'

export const userLogin = payload => {
  return {
    type: USER_LOGIN,
    payload
  }
}

export const userLoginSuccess = payload => ({
  type: USER_LOGIN_SUCCESS,
  payload
})

export const userLoginFail = payload => ({
  type: USER_LOGIN_FAILED,
  payload
})