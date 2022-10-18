import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrenUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RegisterSuccessInterface } from '../../types/registerSuccess.interface';
import { AuthActionTypes } from '../actionTypes';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrenUserInterface }>()
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
