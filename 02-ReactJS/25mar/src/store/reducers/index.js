import { combineReducers } from 'redux'
import { authReducer} from './authReducer'
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  userState: userReducer
})