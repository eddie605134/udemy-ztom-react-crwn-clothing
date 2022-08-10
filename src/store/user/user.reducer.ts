import { USER_ACTION_TYPE } from './user.type'
import { 
  signInFailure, 
  signUpFailure, 
  signOutFailure,
  signOutSuccess,
  signInSuccess
} from './user.action'
import { UserData } from '../../firebase/firebase.utils'
import { AnyAction } from 'redux'

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const INITAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
}

export const userReducer = (state = INITAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null
    }
  }
  if (signInFailure.match(action) || signUpFailure.match(action) || signOutFailure.match(action)) {
    return {
      ...state,
      error: action.payload
    }
  }
  return state
}