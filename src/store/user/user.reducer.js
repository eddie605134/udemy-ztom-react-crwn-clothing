import { USER_ACTION_TYPE } from './user.type'

const INITAL_STATE = {
  currentUser: null,
  error: null
}

export const userReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      }
    case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }
    case USER_ACTION_TYPE.SIGN_IN_FAILURE:
    case USER_ACTION_TYPE.SIGN_UP_FAILURE:
    case USER_ACTION_TYPE.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
  
}