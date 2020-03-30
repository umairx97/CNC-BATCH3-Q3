import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { userReducer } from './userReducer'

// Combining all the reducers here
export const rootReducer = combineReducers({
  auth: authReducer,
  userState: userReducer
})