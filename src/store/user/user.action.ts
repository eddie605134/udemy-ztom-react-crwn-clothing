import { User } from 'firebase/auth';
import { createAction, withMather, Action, ActionWithPayload } from '../../utils/reducer.util'
import { USER_ACTION_TYPE } from './user.type'
import { UserData, AdditionalInformation } from '../../firebase/firebase.utils'

export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPE.SET_CURRENT_USER, UserData>
export type GoogleSignInStart = Action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPE.EMAIL_SIGN_IN_START, {email: string, password: string}>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_SUCCESS, UserData>
export type SignInFailure = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_FAILURE, Error>
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_START, {email: string, password: string, displayName: string}>
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_SUCCESS, {user: User, additionalDetails: AdditionalInformation}>
export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_FAILURE, Error>
export type SignOutStart = Action<USER_ACTION_TYPE.SIGN_OUT_START>
export type SignOutSuccess = Action<USER_ACTION_TYPE.SIGN_OUT_SUCCESS>
export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPE.SIGN_OUT_FAILURE, Error>

export const checkCurrentUserSession = withMather((): CheckUserSession => createAction(USER_ACTION_TYPE.CHECK_USER_SESSION))

export const setCurrentUser = withMather((user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user))

export const googleSignInStart = withMather((): GoogleSignInStart => createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START))

export const emailSignInStart = withMather((email: string, password: string): EmailSignInStart => createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, {email, password}))

export const signInSuccess = withMather((user: UserData & {id: string}): SignInSuccess => createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user))
export const signInFailure = withMather((error: Error): SignInFailure => createAction(USER_ACTION_TYPE.SIGN_IN_FAILURE, error))

export const signUpStart = withMather((email: string, password: string, displayName: string): SignUpStart => createAction(USER_ACTION_TYPE.SIGN_UP_START, { email, password, displayName }))
export const signUpSuccess = withMather((user: User, additionalDetails: AdditionalInformation): SignUpSuccess => createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails }))
export const signUpFailure = withMather((error: Error): SignUpFailure => createAction(USER_ACTION_TYPE.SIGN_UP_FAILURE, error))

export const signOutStart = withMather((): SignOutStart => createAction(USER_ACTION_TYPE.SIGN_OUT_START))
export const signOutSuccess = withMather((): SignOutSuccess => createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS))
export const signOutFailure = withMather((error: Error): SignOutFailure => createAction(USER_ACTION_TYPE.SIGN_OUT_FAILURE, error))


