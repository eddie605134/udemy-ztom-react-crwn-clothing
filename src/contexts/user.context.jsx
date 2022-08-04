import { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../firebase/firebase.utils.js'

import { createAction } from '../utils/reducer.util.js'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const  USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
  
}

const INITAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITAL_STATE)

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user))
  }
  const value = {
    currentUser,
    setCurrentUser
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      setCurrentUser(user);
    })

    return unsubcribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}