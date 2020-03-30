import { SUCCESS } from './actionTypes'
export const userAction = (payload) => ({
  type: SUCCESS, 
  payload // this will be payload.user 
})