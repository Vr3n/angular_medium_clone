import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initialAuthState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
  successMessages: null,
};

const authReducer = createReducer(
  initialAuthState,
  // When User has Submitted Registration Form.
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
      successMessages: null,
    })
  ),
  // When User is Successfully Registered.
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      successMessages: 'Registered User Successfully!',
      currentUser: action.currentUser,
      validationErrors: null,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      successMessages: null,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
