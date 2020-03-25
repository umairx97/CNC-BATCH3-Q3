const initialState = {
  user: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        user: action.payload.user
      }

    default:
      return state
  }
}