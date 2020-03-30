import ActionTypes from '../actions/ActionTypes';

const initialAuthState = {
  user: null,
  errorMessage: '',
  loading: false,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data.user
      };

    case ActionTypes.USER_LOGIN_FAIL:   
      return {...state, user: null, errorMessage: action.data.errorMessage}

    default:
      return state;
  }
};
